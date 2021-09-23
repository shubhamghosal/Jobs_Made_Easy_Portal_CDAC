
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import CandidateDashboard from "./components/CandidateDashboard";
import About from "./components/About";
import Help from "./components/Help";
import ExpTipCandidate from "./components/ExpTipCandidate";
import ExpTipRecruiter from "./components/ExpTipRecruiter";
import FooterBar from "./components/FooterBar";
import HeaderNavbar from "./components/HeaderNavbar";
import RegisterCandidate from "./components/RegisterCandidate";
import RegisterRecruiter from "./components/RegisterRecruiter";
import EditRecruiterProfile from "./components/EditRecruiterProfile";
import EditCandidateProfile from "./components/EditCandidateProfile";
import Profile from "./components/Profile";
import RecruiterDashboard from "./components/RecruiterDashboard";
import JobPost from "./components/JobPost";

const App = () => {
  return (
    <div className="App">
      <HeaderNavbar />

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/exptipcand" component={ExpTipCandidate} />
          <Route exact path="/exptiprecr" component={ExpTipRecruiter} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/register/candidate" component={RegisterCandidate} />
          <Route exact path="/register/recruiter" component={RegisterRecruiter} />
          <Route exact path="/create/job" component={JobPost} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/profile_rec/:id" component={EditRecruiterProfile} />
          <Route path="/profile_cand/:id" component={EditCandidateProfile} />
          <Route exact path="/candidate" component={CandidateDashboard} />
          <Route exact path="/recruiter" component={RecruiterDashboard} />
        </Switch>
      </div>

      <FooterBar />
    </div>

  );
};

export default App;
