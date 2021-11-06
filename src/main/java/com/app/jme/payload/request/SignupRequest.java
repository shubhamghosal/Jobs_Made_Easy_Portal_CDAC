package com.app.jme.payload.request;

import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class SignupRequest {

	@Size(min = 3, max = 20)
	private String fullname;

	@NotBlank
	@Size(min = 3, max = 20)
	private String username;

	@NotBlank
	@Size(max = 50)
	@Email
	private String email;

	@NotBlank
	@Size(min = 6, max = 40)
	private String password;
	
	@Pattern(regexp="(^$|[0-9]{10})")
	private String mobile;
	

	private String gender;
	

	private String location;

	private String skills;


	private String hqual;
	

	private String major;


	private String institute;


	private String yoq;


	private String marks;


	private String exp;


	private String yoexp;


	private String company;


	private String foexp;


	private String description;
	

	private String compName;
	

	private String compDesignation;
	

	private String offLocation;
	

	private String compIndustry;

	private Set<String> role;


	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	
	

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	
	

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public String getHqual() {
		return hqual;
	}

	public void setHqual(String hqual) {
		this.hqual = hqual;
	}
	
	public String getMajor() {
		return major;
	}

	public void setMajor(String major) {
		this.major = major;
	}

	public String getInstitute() {
		return institute;
	}

	public void setInstitute(String institute) {
		this.institute = institute;
	}

	public String getYoq() {
		return yoq;
	}

	public void setYoq(String yoq) {
		this.yoq = yoq;
	}

	public String getMarks() {
		return marks;
	}

	public void setMarks(String marks) {
		this.marks = marks;
	}

	public String getExp() {
		return exp;
	}

	public void setExp(String exp) {
		this.exp = exp;
	}

	public String getYoexp() {
		return yoexp;
	}

	public void setYoexp(String yoexp) {
		this.yoexp = yoexp;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getFoexp() {
		return foexp;
	}

	public void setFoexp(String foexp) {
		this.foexp = foexp;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	

	public String getCompName() {
		return compName;
	}

	public void setCompName(String compName) {
		this.compName = compName;
	}

	public String getCompDesignation() {
		return compDesignation;
	}

	public void setCompDesignation(String compDesignation) {
		this.compDesignation = compDesignation;
	}

	public String getOffLocation() {
		return offLocation;
	}

	public void setOffLocation(String offLocation) {
		this.offLocation = offLocation;
	}

	public String getCompIndustry() {
		return compIndustry;
	}

	public void setCompIndustry(String compIndustry) {
		this.compIndustry = compIndustry;
	}

	public Set<String> getRole() {
		return this.role;
	}

	public void setRole(Set<String> role) {
		this.role = role;
	}
}
