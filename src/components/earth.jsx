import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";
import Pin from "./pin";
import Iss from "./iss";

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap, nightMap] = useTexture([
    '/8k_earth_daymap.jpeg',
    '8k_earth_normal_map.jpeg',
    '8k_earth_specular_map.jpeg',
    '8k_earth_clouds.jpg',
    '8k_earth_nightmap.jpeg'
  ]);

  [colorMap, normalMap, specularMap, cloudsMap].map((e) => {
    e.wrapS = THREE.RepeatWrapping;
    e.offset.x = 1.5708 / (2 * Math.PI);
    return;
  });

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    // earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 24;
  });

  return (
    <>
      {/* <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} /> */}
      <ambientLight color="#f6f3ea"  intensity={0.9} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
      />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.2}
          panSpeed={0.5}
          rotateSpeed={0.4}
          target={[0, 0, 3]}
          minDistance={1.3}
          maxDistance={40}
        />
        {['santiago', 'sydney', 'rio de janeiro'].map((city, index) => (
          <Pin city={city} key={index} />
          ))}
        <Iss />
      </mesh>
    </>
  );
}

export default Earth;