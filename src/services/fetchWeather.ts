import fetch from 'node-fetch';

async function fetchWeather() {
  const DARK_SKY_BASE = 'https://api.darksky.net';
  const DARK_SKY_EXCLUDE = 'currently,minutely,hourly,alerts,flags';
  const LOCATION = '53.5511,9.9937';
  const DARK_SKY_API_KEY = process.env.DARK_SKY_API_KEY;

  try {
    const request = await fetch(
      `${DARK_SKY_BASE}/forecast/${DARK_SKY_API_KEY}/${LOCATION}?exclude=${DARK_SKY_EXCLUDE}&units=si`
    );
    const response = await request.json();
    return response.daily.data;
  } catch (error) {
    throw error;
  }
}

export default fetchWeather;
