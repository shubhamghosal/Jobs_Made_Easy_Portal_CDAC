package com.app.jme.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
	@GetMapping("/all")
	public String allAccess() {
		return "Site Under Construction!!!";
	}

	@GetMapping("/recruiter")
	@PreAuthorize("hasAuthority('RECRUITER')")
	public String recruiterAccess() {
		return "Recruiter DashBoard Contents...";
	}

	@GetMapping("/candidate")
	@PreAuthorize("hasAuthority('CANDIDATE')")
	public String candidateAccess() {
		return "Candidate DashBoard Contents...";
	}
}