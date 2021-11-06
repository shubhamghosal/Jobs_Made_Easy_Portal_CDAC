import React, { useEffect } from "react";

import Aos from 'aos';
import 'aos/dist/aos.css'


function Help() {
   useEffect(() => {
      Aos.init({ duration: 1400, delay: 100 });
   }, []);

   return (
      <div className="helpcontainer">
         <div className="title">
            <p>How Can We Help You ?
            </p>
         </div>

         <div data-aos="fade-up" className="tag" >
            <div className="tagtitle">Login</div>
            <div className="tagcontent">Welcome to our Jobs Made Easy Portal. Then do make sure you have your login Id and an email both for Recruiters as well as for Candidates.
               If you are New to this place then please Register.</div>
         </div>
         <div className="tag">
            <div className="tagtitle">SignUp</div>
            <div className="tagcontent">If you dont have an account on Jobs_Made_Easy then please SignUp and start Your Search on Jobs_Made_Easy as a Recruiter as well as Candidate</div>
         </div>
         <div data-aos="fade-up" className="tag">
            <div className="tagtitle">Recruiter</div>
            <div className="tagcontent">The Recruiter can login and Start his search for candidate after filling the form and mentioning the recuirements</div>
         </div>
         <div data-aos="fade-up" className="tag">
            <div className="tagtitle">Candidate</div>
            <div className="tagcontent">The Candidate can login and Start his search for Job after filling the form and mentioning his Educational details </div>
         </div>
         <div data-aos="fade-up" className="tag">
            <div className="tagtitle">AboutUs</div>
            <div className="tagcontent">The Moto of the company  and the
               Contact details of tht creaters of the company with Name, phone no.,PRN no. and Email id are given here.</div>
         </div>

         <div data-aos="fade-up" className="tag">
            <div className="tagtitle">Contact Us</div>
            <div className="tagcontent">The place where you can address your issues by sending an email and be rest assured to get it sorted within 24 hours</div>
         </div>

      </div>

   );
}
export default Help;