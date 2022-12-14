import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { CartItem } from 'src/app/common/cart-item';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

productses: Product= new Product();

  constructor(private productService : ProductService,private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{

      this.handleProductDetails();
    }
    
    
    )
  }
  handleProductDetails() {
    // get the id param string and convert to number using + symbol
    const theProductId: number=+this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(theProductId).subscribe(
      data => {
        this.productses=data; 
      }
    )

  }

  addToCart() {

    console.log(` Adding to cart the : ${this.productses.productname} and ${this.productses.product_Price}`);
  
  const theCartItem =new CartItem(this.productses);
  this.cartService.addToCart(theCartItem);
  
  }
  
    }
