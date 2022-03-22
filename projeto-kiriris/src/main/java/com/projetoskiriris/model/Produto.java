package com.projetoskiriris.model;

import java.io.Serializable;
import java.math.BigDecimal;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity
public class Produto implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_produto;
	private String nomeproduto;
	private String tipoproduto;
	private BigDecimal valor;
	private Integer quantidade;
	
	@ManyToOne
	@JoinColumn(name = "id_vendedor")
	private Vendedor vendedor;
	
	@ManyToOne
	@JoinColumn(name = "comprador_id")
	private Comprador comprador;


	public Produto() {
		super();
	}

	public Produto(Long id_produto, String nomeproduto, String tipoproduto, BigDecimal valor, Integer quantidade,
			Vendedor vendedor, Comprador comprador) {
		super();
		this.id_produto = id_produto;
		this.nomeproduto = nomeproduto;
		this.tipoproduto = tipoproduto;
		this.valor = valor;
		this.quantidade = quantidade;
		this.vendedor = vendedor;
		this.comprador = comprador;
	}

	public Long getId_produto() {
		return id_produto;
	}

	public void setId_produto(Long id_produto) {
		this.id_produto = id_produto;
	}

	public String getNomeproduto() {
		return nomeproduto;
	}

	public void setNomeproduto(String nomeproduto) {
		this.nomeproduto = nomeproduto;
	}

	public String getTipoproduto() {
		return tipoproduto;
	}

	public void setTipoproduto(String tipoproduto) {
		this.tipoproduto = tipoproduto;
	}

	public BigDecimal getValor() {
		return valor;
	}

	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public Vendedor getVendedor() {
		return vendedor;
	}

	public void setVendedor(Vendedor vendedor) {
		this.vendedor = vendedor;
	}

	public Comprador getComprador() {
		return comprador;
	}

	public void setComprador(Comprador comprador) {
		this.comprador = comprador;
	}
	
}

	