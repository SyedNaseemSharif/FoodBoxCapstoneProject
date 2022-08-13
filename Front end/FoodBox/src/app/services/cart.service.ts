import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  

cartItems: CartItem[]=[];
totalPrice: Subject<number>= new BehaviorSubject<number>(0);
totalQuantity: Subject<number>= new BehaviorSubject<number>(0);

constructor() {}


addToCart(theCartItem: CartItem){

  //check if we already have the item in the cart
  let alreadyExistCart: boolean=false;
  let existingCartItem: CartItem=undefined;

  if(this.cartItems.length>0){
 //find the item in the cart based on item id
// for(let tempCartItem of this.cartItems){

//   if(tempCartItem.id===theCartItem.id){

//     existingCartItem=tempCartItem;
//     break;
//   }
// }

existingCartItem=this.cartItems.find(tempCartItem => tempCartItem.id===theCartItem.id);
//check if we found it
alreadyExistCart=(existingCartItem!=undefined);
  }
 
  if (alreadyExistCart) {

    //increment the quantity
      existingCartItem.quantity++;
  }
else{

  //just add the items to the array
  this.cartItems.push(theCartItem);
}

//compute cart total price and total quanity
this.computeCartTotals();

}
  computeCartTotals() {
    let totalPriceValue: number=0;
    let totalQuantity: number=0;

    for(let currentCartItem of this.cartItems) {

      totalPriceValue+= currentCartItem.quantity*currentCartItem.product_Price;
      totalQuantity+=currentCartItem.quantity;
    }

    //publish the new values ...all subscribers will receive this data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantity);


//log the cart status data for debugging purpose
this.logCartData(totalPriceValue,totalQuantity);

  }
  logCartData(totalPriceValue: number, totalQuantity: number) {
    console.log('contents of the cart');
    for(let tempCartItem of this.cartItems){
      const subtotalprice=tempCartItem.quantity*tempCartItem.product_Price;
      console.log(`cart total is ${subtotalprice}`);
      const totalQ=tempCartItem.quantity;
      console.log(`total items are ${totalQ}`); 
    }
  }

  decreaseFromCart(tempcartitems: CartItem) {
    tempcartitems.quantity--;

    if(tempcartitems.quantity===0){
      this.remove(tempcartitems);
    }
    else{
      this.computeCartTotals(); 
    }
  }
  remove(tempcartitems: CartItem) {
    //get index of item in the array
const itemIndex= this.cartItems.findIndex(tempcartitem=> tempcartitem.id===tempcartitems.id);
    //if found, remove the item from the array at the given index
if (itemIndex>-1){
  this.cartItems.splice(itemIndex, 1);
  this.computeCartTotals();
}
  }

}

