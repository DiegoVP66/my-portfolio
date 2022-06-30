package com.diegovp.dvp.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diegovp.dvp.dto.AboutDTO;
import com.diegovp.dvp.entities.About;
import com.diegovp.dvp.repositories.AboutRepository;
import com.diegovp.dvp.services.exceptions.ResourceNotFoundException;

@Service
public class AboutService {

	@Autowired
	private AboutRepository repository;

	@Transactional(readOnly = true)
	public List<AboutDTO> findAll() {
		List<About> list = repository.findAll();
		return list.stream().map(x -> new AboutDTO(x)).collect(Collectors.toList());
	}

	@Transactional
	public AboutDTO update(Long id, AboutDTO dto) {
		try {
			About entity = repository.getReferenceById(id);
			entity.setContent(dto.getContent());
			entity = repository.save(entity);
			return new AboutDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Entity not found!");
		}
	}

}
