package com.ecommerce.foodbox.dto;

import com.ecommerce.foodbox.entity.Address;

import com.ecommerce.foodbox.entity.Customer;
import com.ecommerce.foodbox.entity.Order;
import com.ecommerce.foodbox.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
