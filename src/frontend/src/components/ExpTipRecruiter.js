import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


export default class ExpTipRecruiter extends Component {
   
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeWorkname = this.onChangeWorkname.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeTypeofwork=this.onChangeTypeofwork.bind(this);
    this.onChangeMinsalary=this.onChangeMinsalary.bind(this);
    this.onChangeMaxsalary=this.onChangeMaxsalary.bind(this);
    this.onChangeOpening=this.onChangeOpening.bind(this);
    this.onChangeEducation=this.onChangeEducation.bind(this);
    this.onChangeCandidate=this.onChangeCandidate.bind(this);


    this.state = {
      workname: "",
      selectedGender:"",
      selectedTypeofwork:"",
      minsalary:"",
      maxsalary:"",
      opening:'',
      education:"select",
      candidate:"",
      worknameError:"",
      minsalaryError:"",
      maxsalaryError:"",
      openingError:""
    };
  }
  onChangeGender(e) {
    this.setState({
      selectedGender: e.target.value
    });
  }
  onChangeTypeofwork(e) {
    this.setState({
      selectedTypeofwork: e.target.value
    });
  }

  onChangeWorkname(e) {
    this.setState({
      workname: e.target.value
    });
  }
 onChangeMinsalary(e){
   this.setState({
     minsalary:e.target.value
   });
 }
 onChangeMaxsalary(e){
  this.setState({
    maxsalary:e.target.value
  });
}
 onChangeOpening(e){
    this.setState({
      opening: e.target.value
    });
   }
  onChangeEducation(e){
    this.setState({
      education: e.target.value
    });
   }
   onChangeCandidate(e){
    this.setState({
       candidate: e.target.value
    });
   }
 validate = () => {
  

   if(this.state.workname.length<1 || this.state.workname.length>20 )
     { 
        this.setState({
          worknameError : " Enter the Name b/w 1 to 20 character "
        }) 
        return false;  
     }
     else if(parseInt(this.state.minsalary)<2000  || (this.state.minsalary) === "" ){
      this.setState({
         minsalaryError : " Salary must be greater than 2000 per Month "
      }) 
      return false;
    } 
    else if(parseInt(this.state.maxsalary>500000) || (this.state.maxsalary)=== ""){
      this.setState({
        maxsalaryError  :" Salary must be less than 5,00,000 per Month "
    }) 
    return false;
    }
   
    else if(parseInt(this.state.minsalary) > parseInt(this.state.maxsalary)){
      this.setState({
         minsalaryError : "Min salary should be minimum than maximum salary ",
         maxsalaryError  :" Min salary should be minimum than maximum salary "
      }) 
      return false;
    }
    else if(parseInt(this.state.opening)===0 || this.state.opening === ""){
      this.setState({
         openingError:" Enter no. of Openings"   
      }) 
      return false;
    }
    else    
      return true;   
 };
 
  handleLogin(e) { 
      
    const isvalid=this.validate();
      if(isvalid){
    alert(`${this.state.workname}  ${this.state.selectedGender} ${this.state.selectedTypeofwork} ${this.state.minsalary} ${this.state.maxsalary} ${this.state.opening} ${this.state.education} ${this.state.candidate}`)
    
    }
    
    else{
      e.preventDefault();

    }
  }
  render() {
    return (
      <div className="container">
      <div className="register_container">


      

      <Form
        onSubmit={this.handleLogin}
        ref={c => {
          this.form = c;
        }}
      >
        <div className="workname">
          <label htmlFor="workname">What type of work are you interested in?* [?]</label>
          <Input
            type="text"
            className="form-control"
            name="workname"
            placeholder="eg: Proffesor"
            value={this.state.workname}
            onChange={this.onChangeWorkname}
            
          />
        </div>
         <div style={{color:'red',marginLeft:'1rem'}} className="Nameerror">
            {this.state.worknameError}
         </div>
        <div className="typeOfWork">
         <label>Type of Work</label>
          <label>
            <input
              type="radio"
              value="fulltime"
              checked={this.state.selectedTypeofwork === "fulltime"}
              onChange={this.onChangeTypeofwork}
            />
            Full time
          </label>
        </div>
        <div className="gender">
          <label>
            <input
              type="radio"
              value="parttime"
              checked={this.state.selectedTypeofwork === "parttime"}
              onChange={this.onChangeTypeofwork}
            />
            PartTime
          </label>
        </div>
        
        <div className="gender">
         <label>Gender</label>
          <label>
            <input
              type="radio"
              value="Male"
              checked={this.state.selectedGender === "Male"}
              onChange={this.onChangeGender}
            />
            Male
          </label>
        </div>
        <div className="gender">
          <label>
            <input
              type="radio"
              value="Female"
              checked={this.state.selectedGender === "Female"}
              onChange={this.onChangeGender}
            />
            Female
          </label>
        </div>
        <div className="gender">
          <label>
            <input
              type="radio"
              value="Other"
              checked={this.state.selectedGender === "Other"}
              onChange={this.onChangeGender}
            />
            Both
          </label>
        </div>
        <div className="salary">
        
      <label htmlFor="minsalary">Minimun Salary</label>
      <input type="text" name="minsalary" placeholder="Min Salary" value={this.state.minsalary} onChange={this.onChangeMinsalary}/>
        <div style={{color:'red',marginLeft:'1rem'}} className="minSalaryError">
          {this.state.minsalaryError}
         </div>
      <label htmlFor="maxsalary">Maximum Salary</label>
      <input type="text" name="maxsalary" placeholder="Max Salary" value={this.state.maxsalary} onChange={this.onChangeMaxsalary} />
       <div style={{color:'red',marginLeft:'1rem'}} className="maxSalaryError">
             {this.state.maxsalaryError}
        </div>
        </div>

        <label htmlFor="opening">Opening</label>
        <input type="number" name="opening" placeholder="no of openings" value={this.state.opening} onChange={this.onChangeOpening}/>
      <div style={{color:'red',marginLeft:'1rem'}} className="openingError">
        {this.state.openingError}
       </div>
      <div className="mineducation">
      <label htmlFor="mineducation" >Minimun Education</label>
        <select name="mineducation" id="mineducation" value={this.state.education} onChange={this.onChangeEducation}>
         <option value="select">Select</option>
         <option value="10">10th Pass</option>
         <option value="12">12th Pass</option>
         <option value="Graduation">Graduation</option>
         <option value="PostGraduation">Post Graduation</option>
         <option value="Phd">PHD</option>
        </select>
      </div>  
      <div className="candidateType">
      <label>Type of Candidate</label>
       <label>
         <input
           type="radio"
           value="fresher"
           checked={this.state.candidate === "fresher"}
           onChange={this.onChangeCandidate}
         />
         Fresher
       </label>
     </div>
     <div className="candidateType">
       <label>
         <input
           type="radio"
           value="experienced"
           checked={this.state.candidate === "experience"}
           onChange={this.onChangeCandidate}
         />
         PartTime
       </label>
     </div>
        <button 
               className="btn btn-primary btn-block ">
                <span className="login">Login</span>
        </button>
      </Form>
    </div>
      </div>
    );
  }
}