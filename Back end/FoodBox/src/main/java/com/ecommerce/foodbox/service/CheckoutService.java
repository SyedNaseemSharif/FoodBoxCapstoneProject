package com.ecommerce.foodbox.service;

import com.ecommerce.foodbox.dto.Purchase;
import com.ecommerce.foodbox.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
