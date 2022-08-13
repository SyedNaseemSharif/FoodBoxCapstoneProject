import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productses: Product[]= [];
  currentCategoryId: number= 1;
  previousCategoryId: number=1;
  searchMode: boolean= false;

  // new properties for pagination
  thePageNumber: number=1;
  thePageSize: number=8;
  theTotalElements: number=0;


  previousKeyword: string=null;

  constructor(private productService: ProductService,private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=> {
    this.listProducts();
  });
}

  listProducts(){
this.searchMode=this.route.snapshot.paramMap.has('keyword');
if(this.searchMode){
  this.handleSearchProducts();  
}
else
{
 this.handlelistProducts();
}
  }

  handleSearchProducts(){

const theKeyword=this.route.snapshot.paramMap.get('keyword');

//
//
if(this.previousKeyword!=theKeyword){

  this.thePageNumber=1;
}

this.previousKeyword=theKeyword;

console.log(`keyword=${theKeyword},thePageNumber=${this.thePageNumber}`);

//now search for products using the keyword
this.productService.searchProductsPaginate(this.thePageNumber-1,
                                            this.thePageSize,
                                            theKeyword).subscribe(this.processResult());    

    }

  handlelistProducts(){
   // check if "id" parameter is available
   const hasCategoryId: boolean =this.route.snapshot.paramMap.has('id');

   if(hasCategoryId) {
     // get the id paramter string. convert to number using the + symbol
     this.currentCategoryId= +this.route.snapshot.paramMap.get('id');
   }
   
   else {
     // no category id available ..default to category id 1
     this.currentCategoryId=1;
   }

//
//check if we  have a different category than the previous
//if we have different category then set thePageNumber back to 1
if (this.previousCategoryId!=this.currentCategoryId){
  this.thePageNumber=1;
}

this.previousCategoryId=this.currentCategoryId;

console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`);




       this.productService.getProductListPaginate(this.thePageNumber-1,
                                                  this.thePageSize,
                                                  this.currentCategoryId).subscribe(this.processResult());
       }
processResult(){
  return data => {
    this.productses=data._embedded.productses;
    this.thePageNumber=data.page.number+1;
    this.thePageSize=data.page.size;
    this.theTotalElements=data.page.totalElements;
  }
}
updatePageSize(pageSize: number){
  this.thePageSize=pageSize;
  this.thePageNumber=1;
  this.listProducts();
}

addToCart(theproductses: Product) {

  console.log(` Adding to cart the : ${theproductses.productname} and ${theproductses.product_Price}`);

const theCartItem =new CartItem(theproductses);
this.cartService.addToCart(theCartItem);

}

  }

