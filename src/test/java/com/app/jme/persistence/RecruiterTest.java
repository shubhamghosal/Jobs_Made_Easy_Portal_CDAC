package com.app.jme.persistence;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.jme.model.Jobs;
import com.app.jme.model.Recruiter;
import com.app.jme.model.User;
import com.app.jme.repository.JobRepository;
import com.app.jme.repository.RecruiterRepository;
import com.app.jme.repository.RoleRepository;
import com.app.jme.repository.UserRepository;

@SpringBootTest
public class RecruiterTest {

	@Autowired
	RecruiterRepository recrRepo;

	@Autowired
	UserRepository userRepo;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	JobRepository jobsRepo;

	@Test
	public void checkRecruiter() {

		long id = 1;

		Recruiter recrData = recrRepo.findByUserId(id).get();

		User userData = userRepo.findById(id).get();

		assertTrue(recrData.getUser().getUserid() == userData.getUserid());

	}

	@Test
	public void checkRecruiterName() {

		long id = 1;

		Recruiter recrData = recrRepo.findByUserId(id).get();

		User userData = userRepo.findById(id).get();

		assertTrue(recrData.getUser().getUsername().contains("shubham") && userData.getUsername().contains("shubham")
				&& recrData.getFullname().contains("Shubham Ghosal"));

	}

	@Test
	public void checkCreatedJobs() {

		long id = 2;

		Recruiter recrData = recrRepo.findById(id).get();

		Jobs job = jobsRepo.findJobByRecId(recrData.getRecrid()).get(0);

		assertTrue(job.getRecruiter().getRecrid() == recrData.getRecrid());

	}

}
