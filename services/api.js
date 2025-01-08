// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5070',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const verifyClaims = async (claims) => {
  try {
    const response = await api.post('/api/verify-claims', { claims });
    return response.data;
  } catch (error) {
    console.error('Error al verificar claims:', error);
    throw error;
  }
};

export default api;