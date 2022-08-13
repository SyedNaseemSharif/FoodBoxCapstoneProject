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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data
@Table(name="products")
@Getter
@Setter
public class Products {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="Product_ID")
	private Long id;
	
	@JsonBackReference
	@ManyToOne(optional=true)
	@JoinColumn(name="Category_ID", nullable=true)
	private Product_category category;
	
	@Column(name="Product_Name")
	private String productname;
	
	@Column(name="Product_Price")
	private BigDecimal Product_Price;
	
	@Column(name="Description")
	private String description;
	
	@Column(name="ImageURL")
	private String imageURL;
	
	@Column(name="Status")
	private boolean product_status;
	
	@Column(name="Date_added")
	@CreationTimestamp
	private Date date_added;
	
	@Column(name="Last_updated")
	@UpdateTimestamp
	private Date last_updated;
	

	
}
