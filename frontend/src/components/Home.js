import React, { useEffect } from "react";
import Typist from 'react-typist';
import Aos from 'aos';
import logo1 from '../img/shutterstock-1.jpg';
import logo2 from '../img/banner1.png';
import logo3 from '../img/secured.jpg';
import 'aos/dist/aos.css'

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 100 });
  }, []);

  return (
    <div className="bodya">
      <div className="container_AboutUs">
        <div className="Job">

          <p><Typist><span>Welcome, to Jobs Made Easy!!</span></Typist></p>
          <p><Typist>Staffing Simplified</Typist></p>
        </div>
        <div className="website f1">
          <div className="websitelogo">
            <img src={logo1} alt="name" />
          </div>
          <div data-aos="fade" className="websitecont">
            Jobs Made Easy(JME) Portal is uniquely designed to bridge. the gap between a recruiter and a suitable candidate, in times when digital transformation is becoming a need for the industry. This project typically eases the entire recruitment process cycle starting from job search to candidates onboarding in a certain company.
          </div>
          <img src={logo2} alt="name" />
        </div>
        <div data-aos="fade-left" className="technology f1">
          <div className="title">Technologically Protected</div>
          <img src={logo3} alt="name" class="center"/>
          <ul>
            <li>We have used enhanced protection features of JWT based authentication (with bcrypt password hashing) </li>
            <li>This provides security on multiple layers of attacks and this is what makes our portal a one stop shop for all your recruitment needs in a secure environment.</li>
            <li>Moreover our technology is based on J2EE which has a platform-independent build and that helps deploying Web-based enterprise applications online swiftly in no time.</li>
            <li>React as a frontend is a free and open-source front-end JavaScript library for building user interfaces or UI components.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;