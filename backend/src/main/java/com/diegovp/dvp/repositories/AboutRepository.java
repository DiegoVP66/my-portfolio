package com.diegovp.dvp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diegovp.dvp.entities.About;

@Repository
public interface AboutRepository extends JpaRepository<About, Long> {

}
