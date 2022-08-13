//package com.ecommerce.foodbox.service;
//
//import javax.transaction.Transactional;
//
//import org.springframework.stereotype.Service;
//
//import com.ecommerce.foodbox.dao.ProductRepository;
//import com.ecommerce.foodbox.dto.addProduct;
//import com.ecommerce.foodbox.dto.addProductResponse;
//import com.ecommerce.foodbox.entity.Products;
//import com.ecommerce.foodbox.entity.orderStatus;
//
//@Service
//public class addProductServiceImpl implements addProductService{
//
//	private ProductRepository productRepository;
//	
//	
//	public addProductServiceImpl(ProductRepository productRepository) {
//		this.productRepository=productRepository;
//	}
//	
//	@Override
//	@Transactional
//	public addProductResponse Add(addProduct addproduct) {
//		
//		//retrieve products from DTO
//		orderStatus orderstatus=addproduct.getOrderstatus();
//		
////		String orderMessage=generateStatus();
////		orderstatus.setOrderMessage(orderMessage);
//		
//		Products products=addproduct.getProducts();
//		productRepository.save(products);
//		
//		return addProductResponse();
//		
//	}
//
//
////	private String generateStatus() {
////		// TODO Auto-generated method stub
////		return "Added product successfully";
////	}
////}
