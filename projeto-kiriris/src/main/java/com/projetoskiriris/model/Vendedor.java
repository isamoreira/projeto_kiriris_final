package com.projetoskiriris.model;


import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;


import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Vendedor implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_vendedor;
	
	private String nomevendedor;
	
	
	@JsonIgnore
	@OneToMany(mappedBy = "vendedor")
	private List<Produto> produtos = new ArrayList<Produto>();
	
	
	public Vendedor() {
		super();
		
	}
	
	
	public Vendedor(Long id_vendedor, String nomevendedor, List<Produto> produtos) {
		super();
		this.id_vendedor = id_vendedor;
		this.nomevendedor = nomevendedor;
		this.produtos = produtos;
	}


	public Long getId_vendedor() {
		return id_vendedor;
	}
	public void setId_vendedor(Long id_vendedor) {
		this.id_vendedor = id_vendedor;
	}
	public String getNomevendedor() {
		return nomevendedor;
	}
	public void setNomevendedor(String nomevendedor) {
		this.nomevendedor = nomevendedor;
	}



}
