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

import com.diegovp.dvp.dto.ContactDTO;
import com.diegovp.dvp.entities.Contact;
import com.diegovp.dvp.repositories.ContactRepository;
import com.diegovp.dvp.services.exceptions.DataBaseException;
import com.diegovp.dvp.services.exceptions.ResourceNotFoundException;

@Service
public class ContactService {

	@Autowired
	private ContactRepository repository;

	@Transactional(readOnly = true)
	public Page<ContactDTO> findAllPaged(Pageable pageable) {
		Page<Contact> page = repository.findAll(pageable);
		return page.map(x -> new ContactDTO(x));
	}

	@Transactional(readOnly = true)
	public ContactDTO findById(Long id) {
		Optional<Contact> obj = repository.findById(id);
		Contact entity = obj.orElseThrow(() -> new ResourceNotFoundException("Id not found:" + id));
		return new ContactDTO(entity);
	}

	@Transactional
	public ContactDTO insert(ContactDTO dto) {
		Contact entity = new Contact();
		copyEntity(entity, dto);
		entity = repository.save(entity);
		return new ContactDTO(entity);
	}

	@Transactional
	public ContactDTO update(Long id, ContactDTO dto) {
		try {
			Contact entity = repository.getReferenceById(id);
			copyEntity(entity, dto);
			return new ContactDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Entity not found!");
		}
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not Found " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DataBaseException("Integrity violation!");
		}
	}

	private void copyEntity(Contact entity, ContactDTO dto) {
		entity.setName(dto.getName());
		entity.setEmail(dto.getEmail());
		entity.setMessage(dto.getMessage());
	}
}
