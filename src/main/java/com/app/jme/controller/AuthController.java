package com.app.jme.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.jme.model.Candidate;
import com.app.jme.model.ERole;
import com.app.jme.model.Recruiter;
import com.app.jme.model.Role;
import com.app.jme.model.User;
import com.app.jme.payload.request.LoginRequest;
import com.app.jme.payload.request.SignupRequest;
import com.app.jme.payload.response.JwtResponse;
import com.app.jme.payload.response.MessageResponse;
import com.app.jme.repository.CandidateRepository;
import com.app.jme.repository.RecruiterRepository;
import com.app.jme.repository.RoleRepository;
import com.app.jme.repository.UserRepository;
import com.app.jme.security.jwt.JwtUtils;
import com.app.jme.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

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

	@Autowired
	JwtUtils jwtUtils;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUserid(), userDetails.getUsername(),
				userDetails.getEmail(), roles));
	}

	@PostMapping("/signup/recruiter")
	public ResponseEntity<?> registerRecruiter(@Valid @RequestBody SignupRequest signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		User user = new User(signUpRequest.getUsername(), signUpRequest.getEmail(),
				encoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.CANDIDATE)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "recruiter":
					Role recRole = roleRepository.findByName(ERole.RECRUITER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(recRole);

					break;
				case "candidate":
					Role candRole = roleRepository.findByName(ERole.CANDIDATE)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(candRole);
				}
			});
		}
		user.setRoles(roles);
		userRepository.save(user);

		Recruiter recruiter = new Recruiter(signUpRequest.getFullname(), signUpRequest.getMobile(),
				signUpRequest.getGender(), signUpRequest.getLocation(), signUpRequest.getSkills(),
				signUpRequest.getCompName(), signUpRequest.getCompDesignation(), signUpRequest.getYoexp(),
				signUpRequest.getOffLocation(), signUpRequest.getCompIndustry(), signUpRequest.getDescription(), user);

		recruiterRepo.save(recruiter);

		return ResponseEntity.ok(new MessageResponse("Recruiter registered successfully!"));
	}

	////////////////////

	@PostMapping("/signup/candidate")
	public ResponseEntity<?> registerCandidate(@Valid @RequestBody SignupRequest signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		User user = new User(signUpRequest.getUsername(), signUpRequest.getEmail(),
				encoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.CANDIDATE)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "recruiter":
					Role recRole = roleRepository.findByName(ERole.RECRUITER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(recRole);

					break;
				case "candidate":
					Role candRole = roleRepository.findByName(ERole.CANDIDATE)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(candRole);
				}
			});
		}
		user.setRoles(roles);
		userRepository.save(user);

		Candidate candidate = new Candidate(signUpRequest.getFullname(), signUpRequest.getMobile(),
				signUpRequest.getGender(), signUpRequest.getLocation(), signUpRequest.getSkills(),
				signUpRequest.getHqual(), signUpRequest.getMajor(), signUpRequest.getInstitute(),
				signUpRequest.getYoq(), signUpRequest.getMarks(), signUpRequest.getExp(), signUpRequest.getYoexp(),
				signUpRequest.getCompany(), signUpRequest.getFoexp(), signUpRequest.getDescription(), user);

		candidateRepo.save(candidate);

		return ResponseEntity.ok(new MessageResponse("Candidate registered successfully!"));
	}

}