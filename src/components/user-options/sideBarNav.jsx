import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: red;
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 1;
`;

export default function SideBarNav() {
  return (
    <StyledNav>
      OLA
    </StyledNav>
  )
}
