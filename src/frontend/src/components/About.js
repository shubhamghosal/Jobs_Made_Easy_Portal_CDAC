import React, { useEffect } from "react";
import logo from '../img/Jobs_Made_Easy.png';
import shub from '../img/shub.png';
import vj from '../img/vj.png';
import shiv from '../img/shiv.png';
import ashi from '../img/ashi.png';
import yog from '../img/yog.png';
import Aos from 'aos';
import 'aos/dist/aos.css'


function About() {
  useEffect(() => {
    Aos.init({duration:2500,delay:300});
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
                <img src={logo}  />  
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
                  <img src={shub}/>
           
                 <div className="teamcont">
                      <ul>
                         <li>Barak Obamama nama</li>
                         <li>PRN: 123901230</li>
                         <li>Baraktak@gmail.com</li>
                         <li>Ph: 9238239923</li>
                    </ul>
                  </div>
            </div> 
           <div data-aos="fade-right" className="teamcard">
              <img src={vj}/>
     
              <div className="teamcont">
                <ul>
                   <li>Barak Obamama nama</li>
                   <li>PRN: 123901230</li>
                   <li>Baraktak@gmail.com</li>
                   <li>Ph: 9238239923</li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-left" className="teamcard">
          <img src={shiv}/>
   
         <div className="teamcont">
              <ul>
                 <li>Barak Obamama nama</li>
                 <li>PRN: 123901230</li>
                 <li>Baraktak@gmail.com</li>
                 <li>Ph: 9238239923</li>
            </ul>
          </div>
    </div>                   
    <div data-aos="fade-right" className="teamcard">
    <img src={ashi}/>

   <div className="teamcont">
        <ul>
           <li>Barak Obamama nama</li>
           <li>PRN: 123901230</li>
           <li>Baraktak@gmail.com</li>
           <li>Ph: 9238239923</li>
      </ul>
    </div>
</div>                           
               <div data-aos="fade-right" className="teamcard">
                  <img src={yog}/>
           
                 <div className="teamcont">
                      <ul>
                         <li>Barak Obamama nama</li>
                         <li>PRN: 123901230</li>
                         <li>Baraktak@gmail.com</li>
                         <li>Ph: 9238239923</li>
                    </ul>
                  </div>
            </div> 
            

      </div>


      </div>
      </div>
  );
}

export default About;
   
