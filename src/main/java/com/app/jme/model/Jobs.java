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
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name = "jobs")
public class Jobs implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "job_id")
	private Long jobid;

	@Size(min = 3, max = 20)
	@Column(name = "job_title")
	private String jobTitle;

	@Column(name = "vacancy")
	private String jobVacancy;

	@Column(name = "req_experience")
	private String reqExp;

	@Column(name = "job_type")
	private String jobType;

	@Column(name = "job_location")
	private String jobLocation;

	@Column(name = "salary")
	private String jobSalary;

	@Column(name = "job_description")
	private String jobDescription;

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "recr_id", referencedColumnName = "recr_id")
	private Recruiter recruiter;

	public Jobs() {

	}

	public Jobs(String jobTitle, String jobVacancy, String reqExp, String jobType, String jobLocation, String jobSalary,
			String jobDescription, Recruiter recruiter) {
		super();
		this.jobTitle = jobTitle;
		this.jobVacancy = jobVacancy;
		this.reqExp = reqExp;
		this.jobType = jobType;
		this.jobLocation = jobLocation;
		this.jobSalary = jobSalary;
		this.jobDescription = jobDescription;
		this.recruiter = recruiter;
	}

	public Long getJobid() {
		return jobid;
	}

	public void setJobid(Long jobid) {
		this.jobid = jobid;
	}

	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	public String getJobVacancy() {
		return jobVacancy;
	}

	public void setJobVacancy(String jobVacancy) {
		this.jobVacancy = jobVacancy;
	}

	public String getReqExp() {
		return reqExp;
	}

	public void setReqExp(String reqExp) {
		this.reqExp = reqExp;
	}

	public String getJobType() {
		return jobType;
	}

	public void setJobType(String jobType) {
		this.jobType = jobType;
	}

	public String getJobLocation() {
		return jobLocation;
	}

	public void setJobLocation(String jobLocation) {
		this.jobLocation = jobLocation;
	}

	public String getJobSalary() {
		return jobSalary;
	}

	public void setJobSalary(String jobSalary) {
		this.jobSalary = jobSalary;
	}

	public String getJobDescription() {
		return jobDescription;
	}

	public void setJobDescription(String jobDescription) {
		this.jobDescription = jobDescription;
	}

	public Recruiter getRecruiter() {
		return recruiter;
	}

	public void setRecruiter(Recruiter recruiter) {
		this.recruiter = recruiter;
	}

}
