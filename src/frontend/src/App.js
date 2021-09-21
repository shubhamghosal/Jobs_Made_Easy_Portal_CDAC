
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Candidate from "./components/Candidate";
import Recruiter from "./components/Recruiter";
import About from "./components/About";
import Help from "./components/Help";
import ExpTipCandidate from "./components/ExpTipCandidate";
import ExpTipRecruiter from "./components/ExpTipRecruiter";
import FooterBar from "./components/FooterBar";
import HeaderNavbar from "./components/HeaderNavbar";
import RegisterCandidate from "./components/RegisterCandidate";
import RegisterRecruiter from "./components/RegisterRecruiter";
import CandidateProfile from "./components/CandidateProfile";
import EditProfile from "./components/EditProfile";
import StarfieldAnimation from 'react-starfield-animation'

const App = () => {
  return (
    <div className="App">
      <HeaderNavbar />
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
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
          <Route path="/profiler/:id" component={Profile} />
          <Route path="/profilec/:id" component={CandidateProfile} />
          <Route path="/profile/edit" component={EditProfile} />
          <Route exact path="/candidate" component={Candidate} />
          <Route exact path="/recruiter" component={Recruiter} />
        </Switch>
      </div>

      <FooterBar />
    </div>

  );
};

export default App;
