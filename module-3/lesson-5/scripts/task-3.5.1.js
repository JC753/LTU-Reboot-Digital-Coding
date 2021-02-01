//step 1
function shoppingCartTotal( array ) {

//step 2
  let totalPrice = 0;
//step 3
  for ( let index = 0; index < array.length; index++  ) {
  
totalPrice = totalPrice + array[ index ].price * array[ index ].quantity;

  }

//step 4
  return totalPrice.toFixed( 2 );

} 

console.log( "£" + shoppingCartTotal( shoppingCart ) );