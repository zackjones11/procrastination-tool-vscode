import fetch from 'node-fetch';

export interface INewsHeadlines {
  title: string;
  url: string;
}

async function fetchNews() {
  const NEWS_API_BASE = 'https://newsapi.org/v2/top-headlines';
  const COUNTRY = 'gb';
  const NUM_OF_RESULTS = 5;
  const NEWS_API_KEY = process.env.NEWS_API_KEY;

  try {
    const request = await fetch(
      `${NEWS_API_BASE}?country=${COUNTRY}&apiKey=${NEWS_API_KEY}&pageSize=${NUM_OF_RESULTS}`
    );
    const { articles } = await request.json();

    return articles.map(({ title, url }: INewsHeadlines) => {
      return { title, url };
    });
  } catch (error) {
    throw error;
  }
}

export default fetchNews;
