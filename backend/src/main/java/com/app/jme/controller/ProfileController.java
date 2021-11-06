package com.app.jme.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.jme.model.Candidate;
import com.app.jme.model.Recruiter;
import com.app.jme.payload.response.MessageResponse;
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

	@GetMapping("/rec_edit/{id}")
	@PreAuthorize("hasAuthority('RECRUITER')")
	public ResponseEntity<Recruiter> getRecruiterById(@PathVariable("id") long id) {
		Optional<Recruiter> recruiterData = recRepo.findById(id);

		if (recruiterData.isPresent()) {
			return new ResponseEntity<>(recruiterData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/cand_edit/{id}")
	@PreAuthorize("hasAuthority('CANDIDATE')")
	public ResponseEntity<Candidate> getCandidateById(@PathVariable("id") long id) {
		Optional<Candidate> candidateData = candRepo.findById(id);

		if (candidateData.isPresent()) {
			return new ResponseEntity<>(candidateData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/profiler_edit/{id}")
	public ResponseEntity<?> updateRecruiter(@PathVariable("id") long id, @RequestBody Recruiter recruiter) {
		Optional<Recruiter> recruiterData = recRepo.findById(id);

		if (recruiterData.isPresent()) {
			Recruiter _recruiter = recruiterData.get();
			_recruiter.setFullname(recruiter.getFullname());
			_recruiter.setMobile(recruiter.getMobile());
			_recruiter.setGender(recruiter.getGender());
			_recruiter.setLocation(recruiter.getLocation());
			_recruiter.setSkills(recruiter.getSkills());
			_recruiter.setCompName(recruiter.getCompName());
			_recruiter.setCompDesignation(recruiter.getCompDesignation());
			_recruiter.setYoexp(recruiter.getYoexp());
			_recruiter.setOffLocation(recruiter.getOffLocation());
			_recruiter.setCompIndustry(recruiter.getCompIndustry());
			_recruiter.setDescription(recruiter.getDescription());
			recRepo.save(_recruiter);
			return ResponseEntity.ok(new MessageResponse("Profile updated successfully!"));
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/profilec_edit/{id}")
	public ResponseEntity<?> updateCandidate(@PathVariable("id") long id, @RequestBody Candidate candidate) {
		Optional<Candidate> candidateData = candRepo.findById(id);

		if (candidateData.isPresent()) {
			Candidate _candidate = candidateData.get();
			_candidate.setFullname(candidate.getFullname());
			_candidate.setMobile(candidate.getMobile());
			_candidate.setGender(candidate.getGender());
			_candidate.setLocation(candidate.getLocation());
			_candidate.setSkills(candidate.getSkills());
			_candidate.setHqual(candidate.getHqual());
			_candidate.setMajor(candidate.getMajor());
			_candidate.setInstitute(candidate.getInstitute());
			_candidate.setYoq(candidate.getYoq());
			_candidate.setMarks(candidate.getMarks());
			_candidate.setExp(candidate.getExp());
			_candidate.setYoexp(candidate.getYoexp());
			_candidate.setCompany(candidate.getCompany());
			_candidate.setFoexp(candidate.getFoexp());
			_candidate.setDescription(candidate.getDescription());
			candRepo.save(_candidate);
			return ResponseEntity.ok(new MessageResponse("Profile updated successfully!"));
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}