import axios from 'axios';

async function getNews() {
  try {
    const response = await axios.get('https://hacker-news.firebaseio.com/v0/beststories.json');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getNewsById(id) {
  try {
    const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default {
  getNews,
  getNewsById,
};
