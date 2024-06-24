const BASE_URL = 'https://serverest.dev'; // Sua base URL do ServeRest

const api = {
  post: async (endpoint, data, options = {}) => {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { ...options.headers, 'Content-Type': 'application/json' },
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.log(`Erro na requisição POST para ${endpoint}:`, error);
      throw error;
    }
  },
  get: async (endpoint, options = {}) => {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: options.headers,
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.log(`Erro na requisição GET para ${endpoint}:`, error);
      throw error;
    }
  },
};

export default api;
