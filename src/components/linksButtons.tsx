import React from 'react'
import { Link as RouterLink, useLocation } from '@reach/router'
import { useRoutePath } from 'react-static'
import styled, { css } from 'styled-components'
import { primaryColor } from '../App'


const LINK_BORDER = `1px dotted silver`

const linkColor = primaryColor;


function withoutTrailingSlashes(path: string): string {
  return path.replace(/^\/|\/$/g, '')
}


export function normalizeInternalHRef(loc: string, to: string, relative?: string | boolean): string {
  const hasAnchor = to.indexOf('#') >= 0
  const trailingSlash = hasAnchor ? false : true

  const _relative = relative === undefined ? to.indexOf('/') !== 0 : relative
  const locWithoutSlashes = withoutTrailingSlashes(loc)
  const prefix = _relative === true
    ? `/${locWithoutSlashes}${locWithoutSlashes !== '' ? '/' : ''}`
    : (_relative || '/')

  return `${prefix}${withoutTrailingSlashes(to)}${trailingSlash ? '/' : ''}`
}


export function useInternalLinkCurrentState(normalizedPath: string): boolean {
  const routePath = (useRoutePath as () => string)()

  return `/${routePath}/` === normalizedPath
}


export interface LinkProps {
  to: string
  relative?: string | boolean
  unstyled?: boolean
  disabled?: boolean
  title?: string
  className?: string
  style?: React.CSSProperties
}
export const Link: React.FC<LinkProps> =
function ({ to, relative, unstyled, disabled, title, className, style, children }) {
  const _to = normalizeInternalHRef(useLocation().pathname, to, relative)
  const isActive = useInternalLinkCurrentState(_to)

  if (to?.startsWith('http') || disabled) {
    return (
      <a
          title={title}
          className={className}
          style={style}
          href={disabled ? undefined : to}>
        {children}
      </a>
    )
  } else {
    return (
      <InternalLink
          title={title}
          className={className}
          aria-current={isActive ? 'page' : undefined}
          unstyled={unstyled}
          style={style}
          to={_to}>
        {children}
      </InternalLink>
    )
  }
}


const InternalLink = styled(RouterLink)`
  text-decoration: none;

  ${(props: { unstyled?: boolean }) => !props.unstyled
    ? css`
        border-bottom: ${LINK_BORDER};
        &:hover {
          border-bottom-style: solid;
        }
      `
    : css`
        color: inherit;
        &:hover {
          border-bottom: none;
          text-decoration: underline;
        }
      `}

  &[aria-current=page] {
    border-bottom: none;
    text-decoration: none;
    color: inherit;
    cursor: default;
  }
  &[aria-current=page]:hover {
    border-bottom: none;
    text-decoration: none;
  }
`


export const UnstyledLink = styled(Link)`
  border-bottom: none;
  color: inherit;

  &:hover {
    border-bottom: none;
    text-decoration: underline;
  }
`


export const disabledButtonStyle = css`
  cursor: not-allowed;
  background: silver;
`

export const enabledButtonStyle = css`
  text-shadow: rgba(0, 0, 0, 0.4) .05rem .05rem .1rem;
  box-shadow:
    ${linkColor.darken(.5).css()} 0 0 0rem .1rem inset,
    rgba(255, 255, 255, 0.3) .1rem .4rem .7em -.2em inset;

  &:hover, &:active, &:focus {
    background-position: 100% 100%;
    text-shadow: rgba(0, 0, 0, 0.2) .05rem .05rem .25rem;
    box-shadow:
      ${linkColor.darken(.5).css()} 0 0 0rem .1rem inset,
      rgba(255, 255, 255, 0) .1rem .4rem 1rem inset;
  }
`

export const buttonStyle = css`
  border: none;
  border-radius: .25rem;
  padding: .5em 1rem;
  color: white;
  font-weight: 400;

  & + & {
    margin-left: .5rem;
  }

  background: linear-gradient(
    135deg,
    ${linkColor.brighten(.5).desaturate(.25).css()} 50%,
    ${linkColor.darken(.5).css()} 50%);

  transition: box-shadow .1s linear, text-shadow .1s linear, background-position .1s linear;
  background-size: 200% 200%;
  background-position: 0% 30%;
`


export const Button = styled(UnstyledLink)`
  ${buttonStyle}

  &:hover {
    text-decoration: none;
  }

  ${(props: { disabled?: boolean }) => props.disabled
    ? disabledButtonStyle
    : enabledButtonStyle}
`
