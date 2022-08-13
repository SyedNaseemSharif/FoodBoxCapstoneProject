import { CartItem } from "./cart-item";

export class OrderItem {
    imageURL: String;
    unitPrice: number;
    quantity:number;
    productId: number;

    constructor(cartItem: CartItem){
        this.imageURL=cartItem.imageURL;
        this.productId=cartItem.id;
        this.quantity=cartItem.quantity;
        this.unitPrice=cartItem.product_Price;
    }
}
