package com.app.jme.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.jme.model.Recruiter;
import com.app.jme.repository.RecruiterRepository;

@RestController
@RequestMapping("/admin/")
public class RecruiterController {
	@Autowired
	private RecruiterRepository recruiterRepository;
	
	@GetMapping("/recruiter")
	public List<Recruiter> getAllRecruiter() {
		return recruiterRepository.findAll();
	}
}
