import axios from 'axios';
// Config
import { apiUrl } from '../utils/config';

async function getNews() {
  try {
    const response = await axios.get(`${apiUrl}/beststories.json`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getNewsById(id) {
  try {
    const response = await axios.get(`${apiUrl}/item/${id}.json`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default {
  getNews,
  getNewsById,
};
