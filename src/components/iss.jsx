import React, { useEffect, useState } from 'react';
import coordinatesFetcher from '@/utils/geocoding';
import calculate from '@/utils/coordinatesConverter';
import { useGLTF } from '@react-three/drei';

export default function Iss() {
  const [{ x, y, z }, setCoordinates] = useState(async () => {
    const { latitude, longitude } = await coordinatesFetcher.getCurrentISSLocation();
    const { x, y, z } = calculate(latitude, longitude).coordinates();
    return { x, y, z };
  });

  const gltf = useGLTF('models/iss/issDraco.gltf');

  useEffect(() => {
    const timer = setInterval(async () => {
      const { latitude, longitude, ...rest } = await coordinatesFetcher.getCurrentISSLocation();
      const { x, y, z } = calculate(latitude, longitude).coordinates();
      setCoordinates({ x, y, z });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <primitive
      scale={0.003}
      object={gltf.scene}
      position={[x, y, z]}
    />
  )
}
