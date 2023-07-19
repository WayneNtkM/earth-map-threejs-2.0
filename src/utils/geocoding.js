function coordinatesFetcher() {
  async function geoCoding(city='belo horizonte') {
    const URL = `https://api.api-ninjas.com/v1/city?name=${city}`;
    const response = await fetch(URL, {
      headers: {
        'X-Api-Key': process.env.NINJAS_APIKEY
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch');
    }

    const data = await response.json();
    return data;
  }
  
  async function getCurrentISSLocation() {
    const ISS_BASE_API = 'http://api.open-notify.org';
    const response = await fetch(`${ISS_BASE_API}/iss-now.json`);
    const { iss_position: issPosition } = await response.json();
    return issPosition;
  }

  return { geoCoding, getCurrentISSLocation }
}

export default coordinatesFetcher()
