import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from './user-options/menu';
import SideBarNav from './user-options/sideBarNav';
import Hamburger from './user-options/hamburger';
import CloseSideBar from './user-options/closeSideBar';

const StyledDiv = styled.div`
  background: transparent;
  position: relative;
  z-index: 1;
`;

const StyledInnerDiv = styled.div`
  left: 20px;
  position: relative;
  top: 20px;
  z-index: 1;
`;

export default function UserOptions() {
  const { isOpen } = useContext(MenuContext);

  const showSideBar = () => isOpen && <SideBarNav />;

  const showHamburger = () => !isOpen && <Hamburger />;

  const showClose = () => isOpen && <CloseSideBar />;

  return (
    <StyledDiv>
      {showSideBar()}
      <StyledInnerDiv>
        {showHamburger()}
        {showClose()}
      </StyledInnerDiv>
    </StyledDiv>
  )
}
