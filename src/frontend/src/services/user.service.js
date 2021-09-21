import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';
const BASE_URL = 'http://localhost:8080/api/profile/';


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

  viewCandidate(id) {
    return axios.get(BASE_URL + `candidate/${id}`, { headers: authHeader() });
  }

  viewRecruiter(id) {
    return axios.get(BASE_URL + `recruiter/${id}`, { headers: authHeader() });
  }

}

export default new UserService();