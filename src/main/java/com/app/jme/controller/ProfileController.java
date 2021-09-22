package com.app.jme.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.jme.model.Candidate;
import com.app.jme.model.Recruiter;
import com.app.jme.repository.CandidateRepository;
import com.app.jme.repository.RecruiterRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/profile")
public class ProfileController {

	@Autowired
	RecruiterRepository recRepo;

	@Autowired
	CandidateRepository candRepo;

	@GetMapping("/recruiter/{id}")
	@PreAuthorize("hasAuthority('RECRUITER')")
	public ResponseEntity<?> getRecruiterById(@PathVariable("id") Long id) {
		Optional<Recruiter> recruiterData = recRepo.findByUserId(id);

		if (recruiterData.isPresent()) {
			return new ResponseEntity<>(recruiterData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/candidate/{id}")
	@PreAuthorize("hasAuthority('CANDIDATE')")
	public ResponseEntity<?> getCandidateById(@PathVariable("id") Long id) {
		Optional<Candidate> candidateData = candRepo.findByUserId(id);

		if (candidateData.isPresent()) {
			return new ResponseEntity<>(candidateData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}