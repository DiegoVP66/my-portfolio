package com.diegovp.dvp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diegovp.dvp.entities.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

}
