package com.app.jme.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
@Table(name = "candidate")
public class Candidate implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cand_id")
	private Long candid;

	@Size(min = 3, max = 20)
	@Column(name = "full_name")
	private String fullname;

	@NotBlank
	@Pattern(regexp = "(^$|[0-9]{10})")
	@Column(name = "mobile_no")
	private String mobile;

	@Column(name = "gender")
	private String gender;
	
	@Column(name = "location")
	private String location;

	@Column(name = "skill")
	private String skills;

	@Column(name = "qualification")
	private String hqual;
	
	@Column(name = "specialization")
	private String major;

	@Column(name = "institute_name")
	private String institute;

	@Column(name = "year_of_pass")
	private String yoq;

	@Column(name = "marks")
	private String marks;

	@Column(name = "exp_status")
	private String exp;

	@Column(name = "years_of_exp")
	private String yoexp;

	@Column(name = "company_name")
	private String company;

	@Column(name = "field_of_exp")
	private String foexp;

	@Column(name = "other_desc")
	private String description;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id", referencedColumnName = "user_id")
	private User user;
	

	public Candidate() {

	}

	public Candidate(String fullname, String mobile, String gender, String location, String skills, String hqual, String major, String institute,
			String yoq, String marks, String exp, String yoexp, String company, String foexp, String description,
			User user) {
		super();
		this.fullname = fullname;
		this.mobile = mobile;
		this.gender = gender;
		this.location = location;
		this.skills = skills;
		this.hqual = hqual;
		this.major = major;
		this.institute = institute;
		this.yoq = yoq;
		this.marks = marks;
		this.exp = exp;
		this.yoexp = yoexp;
		this.company = company;
		this.foexp = foexp;
		this.description = description;
		this.user = user;
	}

	public Long getCandid() {
		return candid;
	}

	public void setCandid(Long candid) {
		this.candid = candid;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
