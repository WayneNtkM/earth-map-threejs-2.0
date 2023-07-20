import React, { useContext } from 'react';
import * as Icons from 'react-icons/ai';
import styled from 'styled-components';
import { MenuContext } from './menu';

const StyledButtonIcons = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 30px;
  font-weight: 400;
  right: 30px;
  position: absolute;
`;

export default function CloseSideBar() {
  const { setIsOpen } = useContext(MenuContext);

  const handleClick = () => setIsOpen(false);

  return (
    <StyledButtonIcons onClick={handleClick}>
      <Icons.AiOutlineClose />
    </StyledButtonIcons>
  )
}