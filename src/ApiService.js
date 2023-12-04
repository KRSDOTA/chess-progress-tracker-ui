export default class ApiService {
    constructor(baseURL) {
      this.baseURL = baseURL;
    }
  
    async fetchData(endpoint) {
      const url = `${this.baseURL}/${endpoint}`;
  
      try {
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
      }
    }
  }