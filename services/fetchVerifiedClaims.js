// services/fetchVerifiedClaims.js
import apiWithAuth from './apiWithAuth';

export const fetchVerifiedClaims = async () => {
  try {
    const response = await apiWithAuth.get('/verify-claims');
    return response.data;
  } catch (error) {
    console.error('Error fetching verified claims:', error);
    throw error;
  }
};
