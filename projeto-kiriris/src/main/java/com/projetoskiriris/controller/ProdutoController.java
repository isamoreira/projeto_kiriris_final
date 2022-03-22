package com.projetoskiriris.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetoskiriris.model.Comprador;
import com.projetoskiriris.model.Produto;
import com.projetoskiriris.model.Vendedor;
import com.projetoskiriris.repositories.CompradorRepository;
import com.projetoskiriris.repositories.ProdutoRepository;
import com.projetoskiriris.repositories.VendedorRepository;




@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/produto")
public class ProdutoController {
	

	@Autowired
	private ProdutoRepository produtoRepository;
	
	@Autowired
	private VendedorRepository vendedorRepository;
	
	@Autowired
	private CompradorRepository compradorRepository;
	
	
	@GetMapping(value="/produtos")
	public ResponseEntity<List<Produto>> findAll() {
		
		List<Produto> produtos = produtoRepository.findAll();
		
		return ResponseEntity.ok().body(produtos);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Produto> findById(@PathVariable Long id) {
		
		Produto produto = produtoRepository.findById(id).get();
		
		return ResponseEntity.ok().body(produto);
	}
	
	// CREATE
	@PostMapping("/produto")
    public Produto createProduto(@RequestBody Produto produto) {
    	
    	return produtoRepository.save(produto);
    }
	
    
    // UPDATE
    @PutMapping("{id}")
    public ResponseEntity<Produto> update(@PathVariable long id,@RequestBody Produto produtoDetails ) {
    	Produto updateProduto = produtoRepository.findById(id).get();
    	Vendedor vendedor = vendedorRepository.findById(produtoDetails.getVendedor().getId_vendedor()).get();
    	Comprador comprador = compradorRepository.findById(produtoDetails.getComprador().getComprador_id()).get();
	
	
    	updateProduto.setNomeproduto(produtoDetails.getNomeproduto());
    	updateProduto.setTipoproduto(produtoDetails.getTipoproduto());
    	updateProduto.setValor(produtoDetails.getValor());
    	updateProduto.setQuantidade(produtoDetails.getQuantidade());
    	updateProduto.setVendedor(vendedor);
    	updateProduto.setComprador(comprador);

    	produtoRepository.save(updateProduto);

    	return ResponseEntity.ok(updateProduto);
    }
    
    // DELETE
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {

    	Produto produto = produtoRepository.findById(id).get();

    	produtoRepository.delete(produto);

    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

    
}
