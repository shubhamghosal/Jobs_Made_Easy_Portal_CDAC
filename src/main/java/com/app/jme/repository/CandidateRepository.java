package com.app.jme.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.jme.model.Candidate;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long> {

	@Query("FROM Candidate c WHERE user_id= :id")
	public Optional<Candidate> findByUserId(@Param("id") Long id);
	
	@Query("FROM Candidate c WHERE user_id= :id")
	public Candidate findByUserDefId(@Param("id") Long id);

}
