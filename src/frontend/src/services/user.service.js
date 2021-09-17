import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getRecruiter() {
    return axios.get(API_URL + 'recruiter', { headers: authHeader() });
  }

  getCandidate() {
    return axios.get(API_URL + 'candidate', { headers: authHeader() });
  }

}

export default new UserService();