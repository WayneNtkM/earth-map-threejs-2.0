import { lazy } from 'react';
const Earth = lazy(() => import('../components/earth'));
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </>
  )
}
