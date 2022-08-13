package com.ecommerce.foodbox.entity;

import java.math.BigDecimal;


import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data
@Table(name="product_category")
@Getter
@Setter
public class Product_category {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="Category_ID")	
    private Long id;
	
	
	@Column(name="Category_name")
    private String category_name;
	
	@JsonManagedReference
	@OneToMany(cascade=CascadeType.ALL, mappedBy="category")
	private Set<Products> products;

	
}
