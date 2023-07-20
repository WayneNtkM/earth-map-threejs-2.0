import React, { useContext } from 'react';
import * as Icons from 'react-icons/gi';
import styled from 'styled-components';
import { MenuContext } from './menu';

const StyledButtonIcons = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 30px;
`;

export default function Hamburger() {
  const { setIsOpen } = useContext(MenuContext);

  const handleClick = () => setIsOpen(true);

  return (
    <StyledButtonIcons onClick={handleClick}>
      <Icons.GiHamburgerMenu />
    </StyledButtonIcons>
  )
}
