function foodDiscount( array ) {

var totalPrice = 0;

// 2. Create variable inside function called totalPrice

// 3. Loop through each item in the array and add the value of the item to the totalPrice, remembering to account for the quantity.

for ( var index = 0; index < array.length; index++ ) {

// 4. If item has a type of 'food' the total price is 20% less

if ( array[ index ].type === 'food') {

  let discount = ( array[ index ].price * 20 ) / 100;

  totalPrice = totalPrice + ( array[ index ].price - discount ) * array[ index ].quantity;
  
} else {

  totalPrice = totalPrice + ( array[ index ].price * array[ index ].quantity );
}


}

// 5. return the totalPrice variable
return totalPrice.toFixed( 2 );

}
//template literals added
console.log( `£ ${foodDiscount( shoppingCart ) } `);

//old school concatenation
console.log( '£ ' + foodDiscount( shoppingCart) );


// Another method
/*

let finalPrice = 0

let discountPrice = 0

let dicountPercentage = 20

function foodShopDiscount (cart) {

for (i = 0; i < cart.length; i++) {

if (cart[i].type.includes("food") )

discountPrice += cart[i].price * cart[i].quantity

}

finalPrice = discountPrice * dicountPercentage / 100

return discountPrice - finalPrice.toFixed(2)

}

console.log(foodShopDiscount(shoppingCart))

*/