import Earth from '@/components/earth'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

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
