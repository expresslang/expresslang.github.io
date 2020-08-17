import React from 'react'
import { UnstyledLink } from 'components/linksButtons'
import organizationLogoImage from '../assets/riboseopen-logo-dark.svg'
import styled from 'styled-components'


const MaintainingOrgBanner: React.FC<{}> = function () {
  return (
    <UnstyledLink to="https://open.ribose.com">
      <MaintainingOrgLogo src={organizationLogoImage} />
    </UnstyledLink>
  )
}


const MaintainingOrgLogo = styled.img`
  height: 16px;
  padding-left: .5rem;
`


export default MaintainingOrgBanner
