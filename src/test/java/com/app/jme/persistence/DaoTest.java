package com.app.jme.persistence;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.app.jme.model.Candidate;
import com.app.jme.model.Recruiter;
import com.app.jme.model.User;
import com.app.jme.repository.CandidateRepository;
import com.app.jme.repository.RecruiterRepository;
import com.app.jme.repository.UserRepository;

@SpringBootTest
class DaoTest {

	@Autowired
	UserRepository userRepo;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	RecruiterRepository recruiterRepo;

	@Autowired
	CandidateRepository candidateRepo;

	@Test
	public void insertUser() {
		User user = new User("ralin", "ralin123@gmail.com", encoder.encode("1234567"));

		/* userRepo.save(user); */

	}

	@Test
	public void insertRecruiter() {

		User userById = userRepo.findById((long) 1).get();

		userById.getUsername();

		Recruiter recruiter = new Recruiter("Rajnish Gupta", "8007469367", "male", "India", "Java", "TCS", "Developer",
				"2", "India", "Software", "nothing", userById);

		/* recruiterRepo.save(recruiter); */
	}

	@Test
	public void getRecruiter() {
		Candidate cand = candidateRepo.findByUserId((long) 1).get();

		assertTrue(cand.getCandid() == 1);
	}

}