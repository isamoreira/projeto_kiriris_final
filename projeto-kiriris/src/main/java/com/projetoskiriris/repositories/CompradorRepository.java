package com.projetoskiriris.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetoskiriris.model.Comprador;


@Repository
public interface CompradorRepository extends JpaRepository <Comprador, Long>{
}