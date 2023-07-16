export default function calculate(userLat = 48.864716, userLng = 2.349014) {
  const lat = (userLat / 180) * Math.PI;
  const lng = (userLng / 180) * Math.PI;
  
  function coordinates() {
    const z = Math.cos(lat) * Math.cos(lng);
    const x = Math.cos(lat) * Math.sin(lng);
    const y = Math.sin(lat);
    return { x, y, z };
  }

  return { coordinates };
}
