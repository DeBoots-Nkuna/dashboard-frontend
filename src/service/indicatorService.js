import axios from 'axios';

export const getAllIndicators = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/indicators');
    return response.data;
  } catch (error) {
    throw error;
  }
};
