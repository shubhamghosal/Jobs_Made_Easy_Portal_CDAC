package com.app.jme.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.jme.model.CandidateStatus;

@Repository
public interface CandidateStatusRepository extends JpaRepository<CandidateStatus, Long>{
	
	@Query("FROM CandidateStatus c WHERE (cand_id= :candid) and (job_id= :jobid)")
	CandidateStatus findByCandidateId(@Param("candid") long candid, @Param("jobid") long jobid);

}
