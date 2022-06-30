package com.diegovp.dvp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diegovp.dvp.dto.AboutDTO;
import com.diegovp.dvp.services.AboutService;

@RestController
@RequestMapping(value = "/about")
public class AboutController {

	@Autowired
	private AboutService service;

	@GetMapping
	public ResponseEntity<List<AboutDTO>> findAll() {
		List<AboutDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<AboutDTO> update(@PathVariable Long id, @RequestBody AboutDTO dto) {
		dto = service.update(id, dto);
		return ResponseEntity.ok().body(dto);
	}
}
