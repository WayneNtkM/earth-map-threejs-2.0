import calculate from '@/utils/coordinatesConverter';
import coordinatesFetcher from '@/utils/geocoding';
import React, { useEffect, useState } from 'react'

function Pin({ city }) {
  const [{ x, y, z }, setCoordinates] = useState({ x: 0, y: 0, z: 0 });
  
  useEffect(() => {
    (async () => {
      if (!city || city.length < 0) {
        const { x, y, z } = calculate().coordinates();
        setCoordinates({ x, y, z });
        return;
      }

      const [{ latitude, longitude }] = await coordinatesFetcher.geoCoding(city);
      const { x, y, z } = calculate(latitude, longitude).coordinates();
      setCoordinates({ x, y, z });
    })();
  }, []);

  return (
    <mesh
      position={[x, y, z]}
    >
      <sphereGeometry args={[0.008, 32, 32]} />
      <meshBasicMaterial
        color={ 0xfff0000 }
      />
    </mesh>
  )
}

export default Pin;