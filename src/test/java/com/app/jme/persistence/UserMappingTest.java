package com.app.jme.persistence;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.jme.model.Candidate;
import com.app.jme.model.ERole;
import com.app.jme.model.Recruiter;
import com.app.jme.model.Role;
import com.app.jme.model.User;
import com.app.jme.repository.CandidateRepository;
import com.app.jme.repository.RecruiterRepository;
import com.app.jme.repository.RoleRepository;
import com.app.jme.repository.UserRepository;

@SpringBootTest
class UserMappingTest {

	@Autowired
	UserRepository userRepo;

	@Autowired
	RecruiterRepository recruiterRepo;

	@Autowired
	CandidateRepository candRepo;

	@Autowired
	RoleRepository roleRepository;

	@Test
	void testTotalUserCount() {

		long userCount = userRepo.count();
		assertTrue(userCount == 13);
	}

	@Test
	void testRecCandCount() {
		long userCount = userRepo.count();
		long recCount = recruiterRepo.count();
		long candCount = candRepo.count();

		assertTrue(userCount == recCount + candCount);
	}

	@Test
	void testUserPresence() {

		long id = 1;

		Optional<User> userData = userRepo.findById(id);

		assertTrue(userData.isPresent());
	}

	@Test
	void testRecruiterMapping() {

		long id = 1;

		User userData = userRepo.findById(id).get();

		Recruiter recr = recruiterRepo.findByUserId(userData.getUserid()).get();

		String usname1 = recr.getUser().getUsername();

		String usname2 = userData.getUsername();

		assertTrue(usname1.equals(usname2));
	}

	@Test
	void testCandidateMapping() {

		long id = 2;

		User userData = userRepo.findById(id).get();

		Candidate cand = candRepo.findByUserId(userData.getUserid()).get();

		Role role = roleRepository.findByName(ERole.CANDIDATE).get();

		String usname1 = cand.getUser().getUsername();

		String usname2 = userData.getUsername();

		if (role.getName() == ERole.CANDIDATE) {
			assertTrue(usname1.equals(usname2));
		} else {
			assertFalse(usname1.equals(usname2));
		}

	}

}
