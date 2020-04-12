import fetch from 'node-fetch';

interface IForcast {
  time: number;
  temperatureHigh: number;
  summary: string;
  icon: string;
}

async function fetchWeather() {
  const DARK_SKY_BASE = 'https://api.darksky.net';
  const DARK_SKY_EXCLUDE = 'currently,minutely,hourly,alerts,flags';
  const LOCATION = '53.5511,9.9937';
  const DARK_SKY_API_KEY = process.env.DARK_SKY_API_KEY;

  try {
    const request = await fetch(
      `${DARK_SKY_BASE}/forecast/${DARK_SKY_API_KEY}/${LOCATION}?exclude=${DARK_SKY_EXCLUDE}&units=si`
    );
    const { daily } = await request.json();

    return daily.data.map(
      ({ time, temperatureHigh, summary, icon }: IForcast) => {
        return { time, temperatureHigh, summary, icon };
      }
    );
  } catch (error) {
    throw error;
  }
}

export default fetchWeather;
