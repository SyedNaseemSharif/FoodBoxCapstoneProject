package com.ecommerce.foodbox.config;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.ecommerce.foodbox.entity.Product_category;
import com.ecommerce.foodbox.entity.Products;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {
	
	private EntityManager entityManager;
	
	@Autowired
	public MyDataRestConfig(EntityManager theEntityManager) {
		entityManager=theEntityManager;
	}

	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
		HttpMethod[] theUnsupportedActions= {HttpMethod.PUT};
		// disable Http methods put post and delete for Products
	
		
		// disable Http methods put post and delete for Product_category
		config.getExposureConfiguration()
		.forDomainType(Product_category.class)
		.withItemExposure((metadata,httpMethods) -> httpMethods.disable(theUnsupportedActions))
		.withCollectionExposure((metadata,httpMethods) -> httpMethods.disable(theUnsupportedActions));
		
		//call an internal helper method
		exposeIds(config);
		
		RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);
	}

	private void exposeIds(RepositoryRestConfiguration config) {
		// expose entity ids
		//get a list of all entity classes from the entity manager 
		Set<EntityType<?>> entities=entityManager.getMetamodel().getEntities();
		
		//create an array of the entity types
		List<Class> entityClasses=new ArrayList<>();
		
		//get the entity type for the entities
		for(EntityType tempEntityType :entities) {
		entityClasses.add(tempEntityType.getJavaType());
	
	}

		//expose the entity ids for the array of entity/domain types
		Class[] domainTypes=entityClasses.toArray(new Class[0]);
		config.exposeIdsFor(domainTypes);
	
}
}