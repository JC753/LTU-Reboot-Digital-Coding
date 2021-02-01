function shoppingCartTotal( array ) {


  let totalPrice = 0;

  for ( let index = 0; index < array.length; index++  ) {
  
totalPrice = totalPrice + array[ index ].price * array[ index ].quantity;

  }

//step 4
  return totalPrice.toFixed( 2 );

} 

console.log( "£" + shoppingCartTotal( shoppingCart ) );