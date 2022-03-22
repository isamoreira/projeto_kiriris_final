package com.projetoskiriris.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetoskiriris.model.Vendedor;

@Repository
public interface VendedorRepository extends JpaRepository <Vendedor, Long>{

}

