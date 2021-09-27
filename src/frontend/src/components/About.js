import React, { useEffect } from "react";
import logo from '../img/Jobs_Made_Easy.png';
import shub from '../img/shub.jpeg';
import vj from '../img/vj.png';
import shiv from '../img/shiv.png';
import ashi from '../img/ashi.png';
import yog from '../img/yog.png';
import Aos from 'aos';
import 'aos/dist/aos.css'


function About() {
  useEffect(() => {
    Aos.init({ duration: 2500, delay: 300 });
  }, []);

  return (
    <div className="bodya">
      <div className="container_AboutUs">
        <div className="Job">
          <p><span>J</span>ob <span>M</span>ade <span>E</span>asy is an Indian employment website operating in India and Around the World.
          </p>
        </div>
        <div className="website f1">
          <div className="websitelogo">
            <img src={logo} alt="name" />
          </div>
          <div data-aos="fade" className="websitecont">
            Jobs Made Easy(JME) Portal is uniquely designed to bridge. the gap between a recruiter and a suitable candidate, in times when digital transformation is becoming a need for the industry. This project typically eases the entire recruitment process cycle starting from job search to candidates onboarding in a certain company.
          </div>
        </div>
        <div data-aos="fade-left" className="technology f1">
          <div className="title">Technology</div>
          <ul>
            <li>The Spring Framework is an application framework and inversion of control container for the Java platform.</li>
            <li>J2EE is a platform-independent, Java-centric environment from Sun/Oracle for developing, building and deploying Web-based enterprise applications online.</li>
            <li>React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.</li>
          </ul>


        </div>
        <div data-aos="fade-left" className="team f1">
          <div className="title">Team</div>
          <div data-aos="fade-left" className="teamcard">
            <img src={shub} alt="name" />

            <div className="teamcont">
              <ul>
                <li>Shubham Ghosal</li>
                <li>PRN: 210540181196</li>
                <li>shubhamghosal@gmail.com</li>
                <li>Ph: 9007469367</li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-right" className="teamcard">
            <img src={vj} alt="name" />

            <div className="teamcont">
              <ul>
                <li>Vijay Ratan Singh</li>
                <li>PRN: 210540181221</li>
                <li>vijrs25@gmail.com</li>
                <li>Ph: 9284094822</li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-left" className="teamcard">
            <img src={shiv} alt="name" />

            <div className="teamcont">
              <ul>
                <li>Shivam Bhai Patel</li>
                <li>PRN: 210540181191</li>
                <li>sbp@gmail.com</li>
                <li>Ph: 8922876559</li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-right" className="teamcard">
            <img src={ashi} alt="name" />

            <div className="teamcont">
              <ul>
                <li>Ashish Kumar Sharma</li>
                <li>PRN: 210540181034</li>
                <li>aks@gmail.com</li>
                <li>Ph: 7983857173</li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-right" className="teamcard">
            <img src={yog} alt="name" />

            <div className="teamcont">
              <ul>
                <li>Yogesh Banjare</li>
                <li>PRN: 210540181235</li>
                <li>yban@gmail.com</li>
                <li>Ph: 7697773334</li>
              </ul>
            </div>
          </div>


        </div>


      </div>
    </div>
  );
}

export default About;

