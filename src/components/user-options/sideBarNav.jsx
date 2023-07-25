import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { MenuContext } from './menu';

const StyledNav = styled.nav`
  background-color: red;
  height: 100vh;
  position: absolute;
  padding: 3em;
  top: 0;
  width: 100vw;
  z-index: 1;
`;

export default function SideBarNav() {
  const { options, setOptions } = useContext(MenuContext);
  const [{ light, rotate }, setPref] = useState(options);

  const handleUserPref = ({ target: { name, value } }) => {
    const [k1, k2, k3, k4] = name.split("-");
    setPref((prev) => ({
      ...prev,
      [k1]: {
        ...prev[k1],
        [k2]: {
          ...prev[k1][k2],
          [k3]: {
            ...prev[k1][k2][k3],
            [k4]: Number(value) < 1 ? 1 : Number(value),
          }
        }
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOptions((prev) => ({ ...prev, light, rotate }))
  };

  return (
    <StyledNav>
      <form>
        <label>
          Multiplicar velocidade de rotação
          <input
            type="number"
            name="rotate-earth-speed-accelerate"
            min={1}
            value={rotate.earth.speed.accelerate}
            onChange={ handleUserPref }
          />
        </label>
        <label>
          Multiplicar velocidade das nuvens
          <input
            type="number"
            name="rotate-clouds-speed-accelerate"
            min={1}
            value={rotate.clouds.speed.accelerate}
            onChange={ handleUserPref }
          />
        </label>
        <label>
          <button
            type="submit"
            onClick={ handleSubmit }
          >
            Gerar
          </button>
        </label>
      </form>
    </StyledNav>
  )
}
