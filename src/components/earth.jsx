import React, { useRef, lazy, useContext } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";
// const Pin = lazy(() => import('@/components/pin'));
const Iss = lazy(() => import('@/components/iss'));
import { MenuContext } from './user-options/menu';

export function Earth() {
  const [colorMap, normalMap, specularMap, cloudsMap, nightMap] = useTexture([
    '8k_earth_daymap.jpeg',
    '8k_earth_normal_map.jpeg',
    '8k_earth_specular_map.jpeg',
    '8k_earth_clouds.jpg',
    '8k_earth_nightmap.jpeg'
  ]);
  const { options } = useContext(MenuContext);
  const { rotate: { earth, clouds } } = options;
  const { isRotating, speed } = earth;
  console.log(earth);

  [colorMap, normalMap, specularMap, cloudsMap].map((e) => {
    e.wrapS = THREE.RepeatWrapping;
    e.offset.x = 1.5708 / (2 * Math.PI);
    return;
  });

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = isRotating && elapsedTime / ((24 / speed.accelerate) * 60 * 60);
    cloudsRef.current.rotation.y = clouds.isRotating && elapsedTime / ((24 / clouds.speed.accelerate) * 60 * 60);
  });

  return (
    <>
      <ambientLight color="0xffffff"  intensity={0.8} />
      {/* <hemisphereLight
        args={[0xffffff, 0xffffff, 0.1]}
        groundColor={[0.095, 1, 0.75 ]}
      />
      <directionalLight
        args={[0xFFFFFF, 1]}
        position={[-100, 10, 50]}
      /> */}
      <OrbitControls
          enableZoom={true}
          enableRotate={true}
          zoomSpeed={0.2}
          panSpeed={0.5}
          rotateSpeed={0.4}
          target={[0, 0, 3]}
          target0={[0, 0, 3]}
          minDistance={1.3}
          maxDistance={40}
        />
      <Stars
        radius={300}
        depth={60}
        count={1000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[0.91, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.1}
          roughness={0.8}
      />
        {/* {['santiago', 'sydney', 'rio de janeiro'].map((city, index) => (
          <Pin city={city} key={index} />
          ))} */}
        <Iss />
      </mesh>
    </>
  );
}

export default Earth;