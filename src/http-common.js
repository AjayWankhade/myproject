import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:9000/user/',
  headers: {
    'Content-Type': 'application/json',
  },
});
