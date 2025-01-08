// services/fetchInfluencers.js
import axios from 'axios';

export const fetchInfluencers = async () => {
  try {
    const response = await axios.get('http://localhost:5070/api/influencers');
    return response.data;
  } catch (error) {
    console.error('Error fetching influencers:', error);
    throw error;
  }
};
