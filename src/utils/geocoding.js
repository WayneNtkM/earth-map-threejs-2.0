export default async function geoCoding(city='paris') {
  const URL = `https://api.api-ninjas.com/v1/city?name=${city}`;
  const response = await fetch(URL, {
    headers: {
      'X-Api-Key': 'eRm7V348yj92eKDtgO5DYg==lnR8PQEqdohPDqQM'
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  const data = await response.json();
  return data;
}
