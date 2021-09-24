package com.app.jme.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.jme.model.Jobs;

@Repository
public interface JobRepository extends JpaRepository<Jobs, Long> {
	
	List<Jobs> findByJobTitle(String jobTitle);
	
	/*
	 * @Query("FROM Candidate c WHERE user_id= :id") public Set<Jobs>
	 * insertJobIdAndCandidateId(@Param("id") Long id);
	 */
}
