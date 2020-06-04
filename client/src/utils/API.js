import axios from "axios";

export default {
  getBook: function() {
    return axios.get('/api/books');
  },
  saveBook: function(obj) {
    return axios.post('/api/books', obj);
  },
  deleteBook: function(_id) {
    return axios.delete('/api/books/' + _id);
  },
  runSearch: function(query){
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  }
};
