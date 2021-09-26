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

@Entity
@Table(name = "candidate_status")
public class CandidateStatus  implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "status_id")
	private Long statusId;
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "cand_id", referencedColumnName = "cand_id")
	private Candidate candidate;
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "job_id", referencedColumnName = "job_id")
	private Jobs job;
	
	@Column(name = "status_selected")
	private String status;
	
	public CandidateStatus() {
		
	}

	public CandidateStatus(Candidate candidate, Jobs job, String status) {
		super();
		this.candidate = candidate;
		this.job = job;
		this.status = status;
	}

	public Long getStatusId() {
		return statusId;
	}

	public void setStatusId(Long statusId) {
		this.statusId = statusId;
	}

	public Candidate getCandidate() {
		return candidate;
	}

	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}

	public Jobs getJob() {
		return job;
	}

	public void setJob(Jobs job) {
		this.job = job;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	

}
