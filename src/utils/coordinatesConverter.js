export default function calculate(userLat=35.3726, userLng=-3.1477) {
  const lat = (Number(userLat) / 180) * Math.PI;
  const lng = (Number(userLng) / 180) * Math.PI;
  
  function coordinates() {
    const z = Math.cos(lat) * Math.cos(lng);
    const x = Math.cos(lat) * Math.sin(lng);
    const y = Math.sin(lat);
    return { x, y, z };
  }

  return { coordinates };
}
