package com.app.jme.persistence;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.jme.model.Candidate;
import com.app.jme.model.JobApplication;
import com.app.jme.model.User;
import com.app.jme.repository.CandidateRepository;
import com.app.jme.repository.JobApplyRepository;
import com.app.jme.repository.JobRepository;
import com.app.jme.repository.UserRepository;

@SpringBootTest
class CandidateTest {

	@Autowired
	CandidateRepository candRepo;

	@Autowired
	UserRepository userRepo;

	@Autowired
	JobRepository jobsRepo;

	@Autowired
	JobApplyRepository jobsApplyRepo;

	@Test
	public void checkCandidate() {

		long id = 2;

		Candidate candData = candRepo.findByUserId(id).get();

		User userData = userRepo.findById(id).get();

		assertTrue(candData.getUser().getUserid() == userData.getUserid());

	}

	@Test
	public void checkCandidateName() {

		long id = 2;

		Candidate candData = candRepo.findByUserId(id).get();

		User userData = userRepo.findById(id).get();

		assertTrue(candData.getUser().getUsername().contains("raghu") && userData.getUsername().contains("raghu")
				&& candData.getFullname().contains("Raghu Tiwari"));

	}

	@Test
	public void checkAppliedJobs() {

		long id = 2;

		Candidate candData = candRepo.findById(id).get();

		JobApplication jobApplyData = jobsApplyRepo.findAllById(candData.getCandid()).get(0);

		assertTrue(jobApplyData.getJob().getJobid() == 3);
	}
}
