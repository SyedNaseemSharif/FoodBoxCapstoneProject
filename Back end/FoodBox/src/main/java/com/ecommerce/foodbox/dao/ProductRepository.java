package com.ecommerce.foodbox.dao;

import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.ecommerce.foodbox.entity.Products;

@CrossOrigin
public interface ProductRepository extends JpaRepository<Products, Long>  {

	Page<Products> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);
	Page<Products> findByProductnameContaining(@RequestParam("productname") String productname, Pageable pageable );
	
}
