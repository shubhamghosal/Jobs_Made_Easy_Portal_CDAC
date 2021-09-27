package com.app.jme.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.jme.model.ERole;
import com.app.jme.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
	
	@Query("FROM Role r WHERE user_id= :id")
	public Optional<Role> findByUserId(@Param("id") Long id);
}