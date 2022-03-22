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
import com.projetoskiriris.model.Vendedor;
import com.projetoskiriris.repositories.VendedorRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/vendedor")
public class VendedorController {
	@Autowired
	private VendedorRepository VendedorRepository;
	
	
	@GetMapping(value="/vendedores")
	public ResponseEntity <List<Vendedor>> findAll(){
		List<Vendedor> vendedores = VendedorRepository.findAll();
		return ResponseEntity.ok().body(vendedores);
	}
	
	@GetMapping(value = "/{id}")
	public  ResponseEntity <Vendedor> findById(@PathVariable Long id){
		Vendedor vendedor = VendedorRepository.findById(id).get();
		 return ResponseEntity.ok().body(vendedor);
		 }
	
	// UPDATE
    @PutMapping("{id}")
    public ResponseEntity<Vendedor> update(@PathVariable Long id,@RequestBody Vendedor vendedorDetails) {
    	Vendedor updateVendedor = VendedorRepository.findById((long) id).get();

    	updateVendedor.setNomevendedor(vendedorDetails.getNomevendedor());
    	
        VendedorRepository.save(updateVendedor);

        return ResponseEntity.ok(updateVendedor);
	
    }
    
 // DELETE
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {

    	Vendedor vendedor = VendedorRepository.findById((long) id).get();

    	VendedorRepository.delete(vendedor);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
    
  //POST
    @PostMapping("/vendedor")
    public Vendedor createVendedor(@RequestBody Vendedor vendedor) {
        return VendedorRepository.save(vendedor);
    }
    
    
}
