import Earth from '@/components/earth'
import geoCoding from '@/utils/geocoding';
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    (async () => {
      const data = await geoCoding();
      console.log(data);
    })();
  }, []);
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
