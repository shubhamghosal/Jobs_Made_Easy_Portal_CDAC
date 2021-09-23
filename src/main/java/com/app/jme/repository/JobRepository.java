package com.app.jme.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.jme.model.Jobs;

@Repository
public interface JobRepository extends JpaRepository<Jobs, Long> {
	
}
