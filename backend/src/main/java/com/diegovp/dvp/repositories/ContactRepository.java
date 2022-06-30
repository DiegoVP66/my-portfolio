package com.diegovp.dvp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diegovp.dvp.entities.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

}
