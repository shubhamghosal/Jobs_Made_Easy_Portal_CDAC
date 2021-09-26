package com.app.jme.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.jme.model.Candidate;
import com.app.jme.model.CandidateStatus;
import com.app.jme.model.JobApplication;
import com.app.jme.model.Jobs;
import com.app.jme.model.Recruiter;
import com.app.jme.payload.response.MessageResponse;
import com.app.jme.repository.CandidateRepository;
import com.app.jme.repository.CandidateStatusRepository;
import com.app.jme.repository.JobApplyRepository;
import com.app.jme.repository.JobRepository;
import com.app.jme.repository.RecruiterRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

	@Autowired
	JobRepository jobsRepo;

	@Autowired
	RecruiterRepository recRepo;

	@Autowired
	CandidateRepository candRepo;

	@Autowired
	JobApplyRepository jobApplyRepo;

	@Autowired
	CandidateStatusRepository candStatusRepo;

	@PostMapping("/create/job/{id}")
	public ResponseEntity<?> addNewJobPost(@PathVariable("id") long id, @RequestBody Jobs job) {

		Optional<Recruiter> recruiterData = recRepo.findByUserId(id);

		if (recruiterData.isPresent()) {
			Recruiter recruiter = recruiterData.get();

			Jobs _job = new Jobs(job.getJobTitle(), job.getJobVacancy(), job.getReqExp(), job.getJobType(),
					job.getJobLocation(), job.getJobSalary(), job.getJobDescription(), recruiter);

			jobsRepo.save(_job);
			return ResponseEntity.ok(new MessageResponse("New job post has been added successfully!"));
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/get/job")
	@PreAuthorize("hasAuthority('CANDIDATE')")
	public ResponseEntity<List<Jobs>> getAllJobs(@RequestParam(required = false) String jobTitle) {
		try {
			List<Jobs> jobs = new ArrayList<Jobs>();
			if (jobTitle == null) {
				jobsRepo.findAll().forEach(jobs::add);
			} else {

				jobsRepo.findByJobTitle(jobTitle).forEach(jobs::add);
			}
			if (jobs.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(jobs, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/apply/job/{userid}/{jobid}")
	public ResponseEntity<?> applyJob(@PathVariable("userid") long userid, @PathVariable("jobid") long jobid) {

		Optional<Candidate> candidateData = candRepo.findByUserId(userid);

		Optional<Jobs> jobsData = jobsRepo.findById(jobid);

		if (candidateData.isPresent()) {
			Candidate _candidate = candidateData.get();
			Jobs _job = jobsData.get();

			JobApplication jobApply = new JobApplication(_job, _candidate);

			jobApplyRepo.save(jobApply);
			return ResponseEntity.ok(new MessageResponse("Job Application successfully completed!"));
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@GetMapping("/track/job/{userid}")
	public ResponseEntity<List<JobApplication>> getAllJobs(@PathVariable("userid") long userid) {
		try {
			List<JobApplication> jobs = new ArrayList<JobApplication>();

			Optional<Candidate> candidateData = candRepo.findByUserId(userid);

			if (candidateData.isPresent()) {
				Candidate _cand = candidateData.get();
				jobApplyRepo.findAllById(_cand.getCandid()).forEach(jobs::add);
				return new ResponseEntity<>(jobs, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/view/job/{userid}")
	public ResponseEntity<?> viewCreatedJobs(@PathVariable("userid") long userid) {

		try {
			List<Jobs> jobs = new ArrayList<Jobs>();
			Optional<Recruiter> recruiterData = recRepo.findByUserId(userid);

			if (recruiterData.isPresent()) {
				Recruiter _recr = recruiterData.get();

				jobsRepo.findJobByRecId(_recr.getRecrid()).forEach(jobs::add);

				return new ResponseEntity<>(jobs, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/applied/status/{jobid}")
	public ResponseEntity<?> appliedCandidates(@PathVariable("jobid") long jobid) {

		List<JobApplication> jobs = new ArrayList<JobApplication>();

		Optional<Jobs> jobData = jobsRepo.findById(jobid);

		if (jobData.isPresent()) {
			jobApplyRepo.findCandidateByJobId(jobid).forEach(jobs::add);

			return new ResponseEntity<>(jobs, HttpStatus.OK);

		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}

	}

	@PutMapping("/set/status/{status}/{candid}/{jobid}")
	public ResponseEntity<?> setCandidateStatus(@PathVariable("status") String status,
			@PathVariable("candid") long candid, @PathVariable("jobid") long jobid) {

		Optional<Candidate> candidateData = candRepo.findById(candid);
		Optional<Jobs> jobData = jobsRepo.findById(jobid);

		if (jobData.isPresent()) {
			Candidate _cand = candidateData.get();
			Jobs _job = jobData.get();
			CandidateStatus candStatus = new CandidateStatus(_cand, _job, status);

			candStatusRepo.save(candStatus);

			return ResponseEntity.ok(new MessageResponse("Candidate status has been updated successfully!"));

		}

		else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}

	}

	@GetMapping("/view/status/{userid}/{jobid}")
	public ResponseEntity<?> viewCandidateStatus(@PathVariable("userid") long userid,
			@PathVariable("jobid") long jobid) {

		Optional<Candidate> candidateData = candRepo.findByUserId(userid);

		if (candidateData.isPresent()) {
			Candidate candidate = candidateData.get();
			CandidateStatus status = candStatusRepo.findByCandidateId(candidate.getCandid(), jobid);

			return new ResponseEntity<>(status, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}

	}

}