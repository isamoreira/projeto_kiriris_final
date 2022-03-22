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
public class Comprador implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long comprador_id;
	private String nomedaempresa;
	
	public Long getComprador_id() {
		return comprador_id;
	}
	public void setComprador_id(Long comprador_id) {
		this.comprador_id = comprador_id;
	}
	public String getNomedaempresa() {
		return nomedaempresa;
	}
	
	@JsonIgnore
	@OneToMany(mappedBy = "comprador")
	private List<Produto> produtos = new ArrayList<Produto>();
	
	public Comprador() {
		super();	
	}
	
	public void setNomedaempresa(String nomedaempresa) {
		this.nomedaempresa = nomedaempresa;
	}
	
	public Comprador(Long comprador_id, String nomedaempresa) {
		super();
		this.comprador_id = comprador_id;
		this.nomedaempresa = nomedaempresa;
	}
	
	
	public List<Produto> getProdutos() {
		return produtos;
	}	
	

	

}
	
	
	
	
	