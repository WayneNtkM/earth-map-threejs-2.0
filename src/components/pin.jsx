import calculate from '@/utils/coordinatesConverter';
import geoCoding from '@/utils/geocoding';
import React, { useEffect, useState } from 'react'

function Pin() {
  const [{ x, y, z }, setCoordinates] = useState({ x: 0, y: 0, z: 0 });
  
  useEffect(() => {
    (async () => {
      const [{ latitude, longitude }] = await geoCoding('Caruaru');
      const { x, y, z } = calculate(latitude, longitude).coordinates();
      setCoordinates({ x, y, z });
    })();
  }, []);

  return (
    <mesh
      position={[x, y, z]}
    >
      <sphereGeometry args={[0.005, 2, 2]} />
      <meshBasicMaterial
        color={ 0xfff0000 }
      />
    </mesh>
  )
}

export default Pin;