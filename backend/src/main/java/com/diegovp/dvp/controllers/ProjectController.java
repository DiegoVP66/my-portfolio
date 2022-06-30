package com.diegovp.dvp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diegovp.dvp.dto.ProjectDTO;
import com.diegovp.dvp.services.ProjectService;

@RestController
@RequestMapping(value = "/projects")
public class ProjectController {

	@Autowired
	private ProjectService service;
	
	@CrossOrigin
	@GetMapping
	public ResponseEntity<Page<ProjectDTO>> findAll(Pageable pageable) {
		Page<ProjectDTO> dto = service.findAllPageable(pageable);
		return ResponseEntity.ok().body(dto);
	}

}
