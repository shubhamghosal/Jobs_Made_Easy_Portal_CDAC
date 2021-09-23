import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/dashboard/';


class DashboardService {
    getPublicContent() {
      return axios.get(API_URL + 'all');
    }
  
    getRecruiter() {
      return axios.get(API_URL + 'recruiter', { headers: authHeader() });
    }
  
    getCandidate() {
      return axios.get(API_URL + 'candidate', { headers: authHeader() });
    }

    createJobPost(jobTitle, jobVacancy, reqExp, jobType, jobLocation, jobSalary, jobDescription) {
        return axios.post(API_URL + "create/job", {
            jobTitle,
            jobVacancy,
            reqExp,
            jobType,
            jobLocation,
            jobSalary,
            jobDescription
        });
      }
  
  }
  
  export default new DashboardService();