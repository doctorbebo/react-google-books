import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBook: function() {
    return axios.get('/api/books');
    // return axios.get("/api", { params: { q: query } });
  }
};
