// services/apiWithAuth.js
import axios from 'axios';

const apiWithAuth = axios.create({
  baseURL: 'http://localhost:5070/api',
  headers: {
    'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`
  }
});

export default apiWithAuth;
