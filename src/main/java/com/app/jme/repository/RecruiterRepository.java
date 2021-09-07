package com.app.jme.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.jme.model.Recruiter;

@Repository
public interface RecruiterRepository extends JpaRepository<Recruiter, Long>{

}
