package com.app.jme.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.jme.model.JobApplication;

@Repository
public interface JobApplyRepository extends JpaRepository<JobApplication, Long>{

	@Query("FROM JobApplication j WHERE cand_id= :candid")
	List<JobApplication> findAllById(@Param("candid") long candid);

	@Query("FROM JobApplication j WHERE job_id= :jobid")
	List<JobApplication> findCandidateByJobId(@Param("jobid") long jobid);
}
