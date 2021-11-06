import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import 'aos/dist/aos.css';
import { Laptop } from 'react-bootstrap-icons';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });

  }
  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  }
  handleChangeSubject = (event) => {
    this.setState({
      subject: event.target.value,
    });
  }
  handleChangeMessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  }
  sendMail = () => {


    var template_params = {
      "name": this.state.name,
      "email": this.state.email,
      "subject": this.state.subject,
      "message": this.state.message,
    }

    var service_id = "service_l0kk22g";
    var template_id = "jme-portal";
    emailjs.send(service_id, template_id, template_params, 'user_qqFKIEtpknOSiAdwtSYrG')
      .then(function (response) {
        alert('SUCCESS!');
      }, function (err) {
        console.log('FAILED...', err);
      });
  };
  render() {
    return (
      <div className="mini-card" data-aos="zoom-in-down" data-aos-duration="1000">
        <header className="header-sub">
          <h2><strong><Laptop color="black" size={60} /> {' '}Get In Touch With Us</strong></h2>
        </header>
        <div>
          <label for="name">Name:</label>
          <input type="text" name="name" onChange={this.handleChangeName} />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="text" name="email" ref="email" onChange={this.handleChangeEmail} />
        </div>
        <div>
          <label for="subject">Subject:</label>
          <input type="text" name="subject" ref="subject"  onChange={this.handleChangeSubject} />
        </div>
        <div>
          <label for="subject">Message:</label>
          <textarea name="message" ref="message" placeholder="Enter Your Message" onChange={this.handleChangeMessage} />
        </div>
        <br />
        <div>
          <button type="submit" onClick={this.sendMail} className="btn btn-outline-success">Send Email</button>
        </div>
      </div>
    );
  }
}
export default Contact;