package com.app.jme.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
@Table(name = "recruiter")
public class Recruiter implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "recr_id")
	private Long recrid;

	@Size(min = 3, max = 20)
	private String fullname;

	@NotBlank
	@Pattern(regexp = "(^$|[0-9]{10})")
	@Column(name = "mobile_no")
	private String mobile;

	@Column(name = "gender")
	private String gender;

	@Column(name = "curr_location")
	private String location;

	@Column(name = "skill_req")
	private String skills;

	@Column(name = "comp_name")
	private String compName;

	@Column(name = "comp_designation")
	private String compDesignation;

	@Column(name = "total_exp")
	private String yoexp;

	@Column(name = "office_location")
	private String offLocation;

	@Column(name = "comp_industry")
	private String compIndustry;

	@Column(name = "other_detail")
	private String description;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id", referencedColumnName = "user_id")
	private User user;
	
	@OneToMany(mappedBy = "recruiter", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
	private Set<Jobs> job = new HashSet<>();


	public Recruiter() {

	}

	public Recruiter(String fullname, String mobile, String gender, String location, String skills, String compName,
			String compDesignation, String yoexp, String offLocation, String compIndustry, String description,
			User user) {
		super();
		this.fullname = fullname;
		this.mobile = mobile;
		this.gender = gender;
		this.location = location;
		this.skills = skills;
		this.compName = compName;
		this.compDesignation = compDesignation;
		this.yoexp = yoexp;
		this.offLocation = offLocation;
		this.compIndustry = compIndustry;
		this.description = description;
		this.user = user;
	}

	public Long getRecrid() {
		return recrid;
	}

	public void setRecrid(Long recrid) {
		this.recrid = recrid;
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

	public String getYoexp() {
		return yoexp;
	}

	public void setYoexp(String yoexp) {
		this.yoexp = yoexp;
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
