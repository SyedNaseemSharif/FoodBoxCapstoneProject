import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';
import { ProductsCategory } from '../common/products-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
  

private baseUrl='http://localhost:8080/api/productses';
private categoryURL='http://localhost:8080/api/products-category';
  
constructor(private httpclient:HttpClient) { }

getProduct(theProductId: number): Observable<Product>{
  const productUrl=`${this.baseUrl}/${theProductId}`;
  return this.httpclient.get<Product>(productUrl);
}


getProductListPaginate(thePage: number,
                       thePageSize:number, 
                       theCategoryId: number): Observable<GetResponseProductses> {

  //need to build url based on category id, page and page size
const searchUrl =`${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`+`&page=${thePage}&size=${thePageSize}`;

return this.httpclient.get<GetResponseProductses>(searchUrl);
}

getProductList(theCategoryId: number): Observable<Product[]> {

  //need to build url based on category id
const searchUrl =`${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

return this.getProducts(searchUrl);
}

searchProducts(theKeyword: string): Observable<Product[]> {
   // need to build url based on keyword
const searchUrl =`${this.baseUrl}/search/findByProductnameContaining?productname=${theKeyword}`;

return this.getProducts(searchUrl);
}

searchProductsPaginate(thePage: number,
                       thePageSize:number, 
                      theKeyword: string): Observable<GetResponseProductses> {

//need to build url based on keyword, page and page size
const searchUrl =`${this.baseUrl}/search/findByProductnameContaining?productname=${theKeyword}`+`&page=${thePage}&size=${thePageSize}`;

return this.httpclient.get<GetResponseProductses>(searchUrl);
}

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpclient.get<GetResponseProductses>(searchUrl).pipe(
      map(response => response._embedded.productses));
  }

getProductCategories(): Observable<ProductsCategory[]> {
  return this.httpclient.get<GetResponseProduct_category>(this.categoryURL).pipe(
    map(response => response._embedded.Product_category));
}

}

interface GetResponseProductses {
  _embedded: {
    productses: Product[];
  },
  page : {
    size : number,
    totalElements : number,
    totalPages : number,
    number : number
  }
}

interface GetResponseProduct_category {
  _embedded: {
    Product_category: ProductsCategory[];
  }
}