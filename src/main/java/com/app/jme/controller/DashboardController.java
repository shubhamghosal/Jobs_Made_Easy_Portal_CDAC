package com.app.jme.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.jme.model.Jobs;
import com.app.jme.model.Recruiter;
import com.app.jme.payload.response.MessageResponse;
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

}