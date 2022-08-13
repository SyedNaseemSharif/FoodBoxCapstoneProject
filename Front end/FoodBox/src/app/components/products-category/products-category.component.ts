import { Component, OnInit } from '@angular/core';
import { ProductsCategory } from 'src/app/common/products-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {

  Product_category: ProductsCategory[];
  
  
  constructor(private productService:  ProductService) { }

  ngOnInit(): void {
    this.listProductCategories();
  }
  listProductCategories() {
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' +JSON.stringify(data));
        this.Product_category=data;
      }
    );
  }

}