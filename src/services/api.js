

import axios from 'axios';

// Base URL of your backend
const API_BASE_URL = 'http://localhost:5000/api'; // adjust if your backend runs on another port

// Auth API helper
export const authAPI = {
  // Login function
  login: (credentials) => axios.post(`${API_BASE_URL}/auth/login`, credentials),

  // Register function (optional for now)
  register: (userData) => axios.post(`${API_BASE_URL}/auth/register`, userData)
};

// You can add more helpers later, e.g., portfolio or stocks
// export const portfolioAPI = {
//   getPortfolio: () => axios.get(`${API_BASE_URL}/portfolio`)
// }

export default authAPI;