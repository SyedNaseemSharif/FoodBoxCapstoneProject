import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/common/order';
import { OrderItem } from 'src/app/common/order-item';
import { Purchase } from 'src/app/common/purchase';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  totalPrice: number=0;
  totalQuantity: number=0;
  constructor(private formBuilder: FormBuilder,
    private cartService: CartService, 
    private checkoutService: CheckoutService, 
    private router: Router) { }

  ngOnInit(): void {
    this.listCartDetails();

    this.checkoutFormGroup=this.formBuilder.group({
customer: this.formBuilder.group({
  firstName:  new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9]{3,20}$')]),
  lastName: new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9]{3,20}$')]),
  email:new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
  MobileNumber:new FormControl('',[Validators.required, Validators.pattern('^[0-9]{10}')])
}),
shippingAddress: this.formBuilder.group({
Flat:[''],
AreaStreetVillage:[''],
LandMark:[''],
TownCity:[''],
State:[''],
Pincode:['']
}),
billingAddress: this.formBuilder.group({
  Flat:[''],
  AreaStreetVillage:[''],
  LandMark:[''],
  TownCity:[''],
  State:[''],
  Pincode:['']
  }),
  creditCard: this.formBuilder.group({
    cardType:[''],
    nameOnCard:[''],
    cardNumber:[''],
    securityCode:[''],
    ExpirationMonth:[''],
    ExpirationYear :['']
    })
});


  }
  listCartDetails(): void {
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice=data
    );
    //subscribe to the cart total quantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity=data
    );
    
    //compute cart total price and quantity
    this.cartService.computeCartTotals();
    }

onSubmit(){
  console.log("Handling the Submit Button");
  
  
  if(this.checkoutFormGroup.invalid){
    this.checkoutFormGroup.markAllAsTouched();
    return;
  }

//set up order
let order=new Order();
order.totalPrice=this.totalPrice;
order.totalQuantity=this.totalQuantity;

//get cart item
const cartItems=this.cartService.cartItems;

//create orderItem from cartItem
let orderItems: OrderItem[]= cartItems.map(tempCartItem => new OrderItem(tempCartItem));


//set up purchase 
let purchase=new Purchase();

//populate purchase  - customer
purchase.customer=this.checkoutFormGroup.controls['customer'].value;  

//populate purchase - shipping address and billing address
purchase.billingAddress=this.checkoutFormGroup.controls['billingAddress'].value;
purchase.shippingAddress=this.checkoutFormGroup.controls['shippingAddress'].value;

//populate purchase - order and orderItems
purchase.order=order;
purchase.orderItems=orderItems;
//call rest api via the checkout service
this.checkoutService.placeOrder(purchase).subscribe(
  {
next: response => {
  alert(`Your order has been received.\n order tracking number: ${response.orderTrackingNumber}`);
  //reset cart
  this.resetCart();
},

error: err =>{
  alert(`There is an error:${err.message}`)
}


});



}
  resetCart() {
    //rest cart data
this.cartService.cartItems=[];
this.cartService.totalPrice.next(0);
this.cartService.totalQuantity.next(0);
    //reset the form
this.checkoutFormGroup.reset();
    //navigate back to the products page
    this.router.navigateByUrl("/productses");
  }

get firstName() { return this.checkoutFormGroup.get('customer.firstName');}
get lastName() { return this.checkoutFormGroup.get('customer.lastName');}
get email() { return this.checkoutFormGroup.get('customer.email');}
get MobileNumber() {return this.checkoutFormGroup.get('customer.MobileNumber');}


get shippingAddressPincode() { return this.checkoutFormGroup.get('shippingAddress.Pincode'); }
  get shippingAddressTownCity() { return this.checkoutFormGroup.get('shippingAddress.TownCity'); }
  get shippingAddressState() { return this.checkoutFormGroup.get('shippingAddress.State'); }
  get shippingAddressLandMark() { return this.checkoutFormGroup.get('shippingAddress.LandMark'); }
  get shippingAddressAreaStreetVillage() { return this.checkoutFormGroup.get('shippingAddress.AreaStreetVillage'); }
  get shippingAddressFlat() { return this.checkoutFormGroup.get('shippingAddress.Flat'); }

  get billingAddressPincode() { return this.checkoutFormGroup.get('billingAddress.Pincode'); }
  get billingAddressTownCity() { return this.checkoutFormGroup.get('billingAddress.TownCity'); }
  get billingAddressState() { return this.checkoutFormGroup.get('billingAddress.State'); }
  get billingAddressLandMark() { return this.checkoutFormGroup.get('billingAddress.LandMark'); }
  get billingAddressAreaStreetVillage() { return this.checkoutFormGroup.get('billingAddress.AreaStreetVillage'); }
  get billingAddressFlat() { return this.checkoutFormGroup.get('billingAddress.Flat'); }



  get creditCardType() { return this.checkoutFormGroup.get('creditCard.cardType'); }
  get creditCardNameOnCard() { return this.checkoutFormGroup.get('creditCard.nameOnCard'); }
  get creditCardNumber() { return this.checkoutFormGroup.get('creditCard.cardNumber'); }
  get creditCardSecurityCode() { return this.checkoutFormGroup.get('creditCard.securityCode'); }
  get creditCardExpirationYear() { return this.checkoutFormGroup.get('creditCard.ExpirationYear'); }
  get creditCardExpirationMonth() { return this.checkoutFormGroup.get('creditCard.ExpirationMonth'); }
  

copyShippingAddressToBillingAddress(event)
{
if(event.target.checked){

  this.checkoutFormGroup.controls['billingAddress'].setValue(this.checkoutFormGroup.controls['shippingAddress'].value);
}
else{
  this.checkoutFormGroup.controls['billingAddress'].reset();
}  
}
  }
