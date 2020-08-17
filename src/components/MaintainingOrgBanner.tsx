import React from 'react'
import { UnstyledLink } from 'components/linksButtons'
import organizationLogoImage from '../assets/riboseopen-logo-dark.svg'
import styled from 'styled-components'


const MaintainingOrgBanner: React.FC<{}> = function () {
  return (
    <UnstyledLink to="https://open.ribose.com">
      <MaintainingOrgLogo src={organizationLogoImage} className="org-logo" />
    </UnstyledLink>
  )
}


const MaintainingOrgLogo = styled.img`
  height: 16px;
  margin-bottom: 1rem;
`


export default MaintainingOrgBanner
