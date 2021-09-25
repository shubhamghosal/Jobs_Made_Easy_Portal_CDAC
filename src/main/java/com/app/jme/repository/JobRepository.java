package com.app.jme.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.jme.model.Jobs;

@Repository
public interface JobRepository extends JpaRepository<Jobs, Long> {
	
	List<Jobs> findByJobTitle(String jobTitle);
	
	@Query("FROM Jobs j WHERE recr_id= :recrid")
	List<Jobs> findJobByRecId(@Param("recrid") long recrid);

}
