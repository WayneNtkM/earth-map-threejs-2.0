import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export default function Menu({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const context = { isOpen, setIsOpen }

  return (
    <MenuContext.Provider value={ context }>
      {children}
    </MenuContext.Provider>
  )
}
