package com.app.jme.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.jme.model.Recruiter;

@Repository
public interface RecruiterRepository extends JpaRepository<Recruiter, Long> {
	
	@Query("FROM Recruiter r WHERE user_id= :id")
	public Optional<Recruiter> findByUserId(@Param("id") Long id);

}
