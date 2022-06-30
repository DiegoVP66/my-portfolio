package com.diegovp.dvp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diegovp.dvp.dto.ProjectDTO;
import com.diegovp.dvp.entities.Project;
import com.diegovp.dvp.repositories.ProjectRepository;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository service;
	
	@Transactional(readOnly = true)
	public Page<ProjectDTO> findAllPageable(Pageable pageable) {
		Page<Project> page = service.findAll(pageable);
		return page.map(x -> new ProjectDTO(x));
	}

}
