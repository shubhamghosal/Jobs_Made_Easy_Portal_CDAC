import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  registerRecruiter(role, fullname, username, email, password, mobile, gender, location, skills, compName, compDesignation, yoexp, offLocation, compIndustry, description) {
    return axios.post(API_URL + "signup/recruiter", {
      role,
      fullname,
      username,
      email,
      password,
      mobile,
      gender,
      location,
      skills,
      compName,
      compDesignation,
      yoexp,
      offLocation,
      compIndustry,
      description
    });
  }

  registerCandidate(role, fullname, username, email, password, mobile, gender, location, skills, hqual, major, institute, yoq, marks, exp, yoexp, company, foexp, description) {
    return axios.post(API_URL + "signup/candidate", {
      role,
      fullname,
      username,
      email,
      password,
      mobile,
      gender,
      location,
      skills,
      hqual,
      major,
      institute,
      yoq,
      marks,
      exp,
      yoexp,
      company,
      foexp,
      description
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

}

export default new AuthService();