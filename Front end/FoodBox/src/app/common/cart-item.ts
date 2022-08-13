import { Product } from "./product";

export class CartItem {
    id: number;
    productname : string;
    imageURL : string;
    product_Price : number;
    quantity: number;


    // mapping class cartitem variables with product class variables

    constructor(productses: Product){
        this.id=productses.id;
        this.productname=productses.productname;
        this.imageURL=productses.imageURL;
        this.product_Price=productses.product_Price;
        this.quantity=1;
    }
}

