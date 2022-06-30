package com.diegovp.dvp.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diegovp.dvp.dto.ProjectDTO;
import com.diegovp.dvp.entities.Project;
import com.diegovp.dvp.repositories.ProjectRepository;
import com.diegovp.dvp.services.exceptions.DataBaseException;
import com.diegovp.dvp.services.exceptions.ResourceNotFoundException;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository repository;

	@Transactional(readOnly = true)
	public Page<ProjectDTO> findAllPageable(Pageable pageable) {
		Page<Project> page = repository.findAll(pageable);
		return page.map(x -> new ProjectDTO(x));
	}

	@Transactional(readOnly = true)
	public ProjectDTO findById(Long id) {
		Optional<Project> obj = repository.findById(id);
		Project entity = obj.orElseThrow(() -> new ResourceNotFoundException("Id not found!"));
		return new ProjectDTO(entity);
	}

	@Transactional
	public ProjectDTO insert(ProjectDTO dto) {
		Project entity = new Project();
		copyEntity(entity, dto);
		entity = repository.save(entity);
		return new ProjectDTO(entity);
	}

	@Transactional
	public ProjectDTO update(Long id, ProjectDTO dto) {
		try {
			Project entity = repository.getReferenceById(id);
			copyEntity(entity, dto);
			entity = repository.save(entity);
			return new ProjectDTO(entity);

		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Entity not found!");
		}

	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found!");
		} catch (DataIntegrityViolationException e) {
			throw new DataBaseException("Integrity violation!");
		}
	}

	private void copyEntity(Project entity, ProjectDTO dto) {
		entity.setTitle(dto.getTitle());
		entity.setContent(dto.getContent());
		entity.setImage(dto.getImage());
		entity.setLink(dto.getLink());
		entity.setRepository(dto.getRepository());
	}

}
