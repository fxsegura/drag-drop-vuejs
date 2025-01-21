import axios from 'axios';

// Set up Axios instance with base URL from .env
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getLandingPages = async () => {
  try {
    const response = await api.get('/landing-pages');
    return response.data;
  } catch (error) {
    console.error('Error fetching landing pages:', error);
    throw error;
  }
};

// Get a landing page by ID
export const getLandingPage = async (id) => {
  try {
    const response = await api.get(`/landing-pages/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching landing page:', error);
    throw error;
  }
};

// Save a landing page
export const saveLandingPage = async (name, content) => {
  try {
    const response = await api.post('/landing-pages', { name, content });
    return response.data;
  } catch (error) {
    console.error('Error saving landing page:', error);
    throw error;
  }
};

// Delete a landing page
export const deleteLandingPage = async (id) => {
  try {
    const response = await api.delete(`/landing-pages/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting landing page:', error);
    throw error;
  }
};
