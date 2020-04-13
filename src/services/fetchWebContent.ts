import fetch from 'node-fetch';

async function fetchWebContent(url: string) {
  try {
    const request = await fetch(url);
    return await request.text();
  } catch (error) {
    throw error;
  }
}

export default fetchWebContent;
