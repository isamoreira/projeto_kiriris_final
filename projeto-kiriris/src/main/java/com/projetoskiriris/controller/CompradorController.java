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
import com.projetoskiriris.repositories.CompradorRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value="/comprador")
public class CompradorController {
	
	@Autowired
	private CompradorRepository CompradorRepository;
	
	@GetMapping(value="/compradores")
	public ResponseEntity <List<Comprador>> findAll(){
		List<Comprador> compradores = CompradorRepository.findAll();
		return ResponseEntity.ok().body(compradores);
	}
	
	@GetMapping(value = "/{id}")
	public  ResponseEntity <Comprador> findById(@PathVariable Long id){
		Comprador comprador = CompradorRepository.findById(id).get();
		 return ResponseEntity.ok().body(comprador);
	}
	
	// UPDATE
    @PutMapping("{id}")
    public ResponseEntity<Comprador> update(@PathVariable long id,@RequestBody Comprador compradorDetails) {
    	Comprador updateComprador = CompradorRepository.findById((long) id).get();

    	updateComprador.setNomedaempresa(compradorDetails.getNomedaempresa());
  
        CompradorRepository.save(updateComprador);

        return ResponseEntity.ok(updateComprador);
    }
    
 // DELETE
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {

    	Comprador comprador =CompradorRepository.findById((long) id).get();

    	CompradorRepository.delete(comprador);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
    
    //POST
    @PostMapping("/comprador")
    public Comprador createComprador(@RequestBody Comprador comprador) {
        return CompradorRepository.save(comprador);
    }
    
	
    

}
