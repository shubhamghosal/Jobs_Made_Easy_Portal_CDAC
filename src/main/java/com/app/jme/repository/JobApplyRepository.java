package com.app.jme.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.jme.model.JobApplication;

@Repository
public interface JobApplyRepository extends JpaRepository<JobApplication, Long>{

}
