import { lazy } from 'react';
const Earth = lazy(() => import('../components/earth'));
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import UserOptions from '@/components/userOptions';
import styled from 'styled-components';
import Menu from '@/components/user-options/menu';

const StyledDiv = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
`;

export default function Home() {
  return (
    <StyledDiv>
      <Menu>
        <UserOptions />
      </Menu>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </StyledDiv>
  )
}
