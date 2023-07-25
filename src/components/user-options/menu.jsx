import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export default function Menu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState({
    light: {
      ambient: false,
      hemisphere: true,
    },
    rotate: {
      earth: {
        isRotating: true,
        speed: {
          accelerate: 1,
        }
      },
      clouds: {
        isRotating: true,
        speed: {
          accelerate: 1,
        }
      },
    },
  });

  const context = { isOpen, setIsOpen, options, setOptions }

  return (
    <MenuContext.Provider value={ context }>
      {children}
    </MenuContext.Provider>
  )
}
