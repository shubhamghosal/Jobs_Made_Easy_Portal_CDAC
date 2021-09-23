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

  createJobPost(id, jobTitle, jobVacancy, reqExp, jobType, jobLocation, jobSalary, jobDescription) {
    return axios.post(API_URL + `create/job/${id}`, {
      jobTitle,
      jobVacancy,
      reqExp,
      jobType,
      jobLocation,
      jobSalary,
      jobDescription
    });
  }

  getJobPost() {
    return axios.get(API_URL + 'get/job', { headers: authHeader() })
  }

  findByTitle(jobTitle) {
    return axios.get(API_URL + `get/job?jobTitle=${jobTitle}`, { headers: authHeader() });
  }

}

export default new DashboardService();