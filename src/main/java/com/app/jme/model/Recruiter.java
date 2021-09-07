package com.app.jme.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "recruiter")
public class Recruiter {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "first_name")
	private String firstName;
	@Column(name = "last_name")
	private String lastName;
	@Column(name = "email_id")
	private String emailId;
	@Column(name = "mobile_number")
	private long mobileNumber;
	@Column(name = "password")
	private String password;
	@Column(name = "confirm_password")
	private String confirmPassword;
	@Column(name = "current_location")
	private String currentLocation;
	@Column(name = "company_name")
	private String companyName;
	@Column(name = "office_address")
	private String officeAddress;
	@Column(name = "total_experience")
	private long totalExperience;
	@Column(name = "sectors")
	private String sectors;
	@Column(name = "skill_desired")
	private String skillDesired;
	@Column(name = "other_description")
	private String otherDescription;

	public Recruiter() {
		
	}

	public Recruiter(String firstName, String lastName, String emailId, long mobileNumber, String password,
			String confirmPassword, String currentLocation, String companyName, String officeAddress,
			long totalExperience, String sectors, String skillDesired, String otherDescription) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.mobileNumber = mobileNumber;
		this.password = password;
		this.confirmPassword = confirmPassword;
		this.currentLocation = currentLocation;
		this.companyName = companyName;
		this.officeAddress = officeAddress;
		this.totalExperience = totalExperience;
		this.sectors = sectors;
		this.skillDesired = skillDesired;
		this.otherDescription = otherDescription;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public String getCurrentLocation() {
		return currentLocation;
	}

	public void setCurrentLocation(String currentLocation) {
		this.currentLocation = currentLocation;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getOfficeAddress() {
		return officeAddress;
	}

	public void setOfficeAddress(String officeAddress) {
		this.officeAddress = officeAddress;
	}

	public long getTotalExperience() {
		return totalExperience;
	}

	public void setTotalExperience(long totalExperience) {
		this.totalExperience = totalExperience;
	}

	public String getSectors() {
		return sectors;
	}

	public void setSectors(String sectors) {
		this.sectors = sectors;
	}

	public String getSkillDesired() {
		return skillDesired;
	}

	public void setSkillDesired(String skillDesired) {
		this.skillDesired = skillDesired;
	}

	public String getOtherDescription() {
		return otherDescription;
	}

	public void setOtherDescription(String otherDescription) {
		this.otherDescription = otherDescription;
	}
	
	
}
