package com.app.jme.persistence;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.HashSet;
import java.util.Set;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.app.jme.model.Candidate;
import com.app.jme.model.ERole;
import com.app.jme.model.Role;
import com.app.jme.model.User;
import com.app.jme.repository.CandidateRepository;
import com.app.jme.repository.RecruiterRepository;
import com.app.jme.repository.RoleRepository;
import com.app.jme.repository.UserRepository;

@SpringBootTest
class AuthTesting {

	@Autowired
	RecruiterRepository recruiterRepo;

	@Autowired
	CandidateRepository candidateRepo;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Test
	void testCandidateRegistration() {
		Set<Role> roles = new HashSet<>();

		User user = new User("rajesh", "raj@gmail.com", encoder.encode("123456"));

		Role candRole = roleRepository.findByName(ERole.CANDIDATE).get();

		roles.add(candRole);

		user.setRoles(roles);
		
		userRepository.save(user);

		Candidate candidate = new Candidate("Rajesh Sharma", "871231232112", "male", "India", "Java", "B.Tech", "CSE",
				"Techno India", "2019", "79", "yes", "2", "TCS", "IT", "Nothing", user);
		candidateRepo.save(candidate);

		assertTrue(candidateRepo.findByUserId(user.getUserid()).get().getUser().getUsername()=="rajesh");
	}

}
