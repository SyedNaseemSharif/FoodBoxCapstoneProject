package com.ecommerce.foodbox.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.foodbox.dao.ProductRepository;
import com.ecommerce.foodbox.entity.Products;

@RestController
@CrossOrigin
@RequestMapping("/api/Product")
public class CRUDsupport {

	@Autowired
	private ProductRepository repository;
	
	@PostMapping("/addProduct")
	public String addProduct(@RequestBody Products products) {
        repository.save(products);
        return "Hi " + products.getProductname() + " has been added successfully";
    }
	
	@DeleteMapping("/deleteProduct/{id}")
	public void deleteProduct(@PathVariable Long id){
		repository.deleteById(id);
		
	}
	
}
