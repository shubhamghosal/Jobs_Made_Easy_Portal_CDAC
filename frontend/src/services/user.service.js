import axios from 'axios';
import authHeader from './auth-header';

const BASE_URL = 'http://localhost:8080/api/profile/';


class UserService {
  viewCandidate(id) {
    return axios.get(BASE_URL + `candidate/${id}`, { headers: authHeader() });
  }
//By User Id
  viewRecruiter(id) {
    return axios.get(BASE_URL + `recruiter/${id}`, { headers: authHeader() });
  }

  updateRecruiter(id, data) {
    return axios.put(BASE_URL + `profiler_edit/${id}`, data );
  }

  updateCandidate(id, data) {
    return axios.put(BASE_URL + `profilec_edit/${id}`, data );
  }
//By Recruiter Id
  editRecruiter(id) {
    return axios.get(BASE_URL + `rec_edit/${id}`, { headers: authHeader() });
  }

  editCandidate(id) {
    return axios.get(BASE_URL + `cand_edit/${id}`, { headers: authHeader() });
  }


}

export default new UserService();