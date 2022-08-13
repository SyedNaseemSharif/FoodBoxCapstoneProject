package com.ecommerce.foodbox.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ecommerce.foodbox.entity.Product_category;


	@CrossOrigin
	@RepositoryRestResource(collectionResourceRel="Product_category", path= "products-category")
	public interface ProductCategoryRepository extends JpaRepository<Product_category, Long>  {

		
	}

