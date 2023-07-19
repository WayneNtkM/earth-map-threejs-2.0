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
    const ISS_BASE_API = 'https://api.wheretheiss.at/v1/satellites/25544';
    const response = await fetch(ISS_BASE_API);
    const data = await response.json();
    return data;
  }

  return { geoCoding, getCurrentISSLocation }
}

export default coordinatesFetcher()
