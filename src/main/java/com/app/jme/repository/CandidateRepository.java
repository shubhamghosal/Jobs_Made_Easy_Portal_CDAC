package com.app.jme.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.jme.model.Candidate;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long> {


}
