import fetch from 'node-fetch';

async function fetchQuote() {
  const QUOTES_API_BASE = 'http://quotes.rest/qod.json';
  const CATEGORY = 'inspire';

  try {
    const request = await fetch(`${QUOTES_API_BASE}?category=${CATEGORY}`);
    const {
      contents: { quotes }
    } = await request.json();

    return quotes[0].quote;
  } catch (error) {
    throw error;
  }
}

export default fetchQuote;
