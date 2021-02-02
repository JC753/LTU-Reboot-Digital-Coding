function discountType( array, discountAmount, type) {

  let totalPrice = 0:

  for( let index = 0; index < array.length; index++) {

    if (array[ index ].type === type) {

let discount = (array[ index ].price) * discountAmount ) / 100;

      totalPrice = totalPrice + ( array[ index ].price - discount ) * array[ index ].quantity;
    } else if ( type === 'any') {

      let discount = ( array[ index ].price * discountAmount ) / 100;

        totalPrice = totalPrice * ( array[ index ].price - discount ) * array[ index ].quantity;
    } else { 
    
      totalPrice = totalPrice + ( array[ index ].price * array[ index ].quantity );

    }


  }

  return totalPrice.toFixed( 2 )

  documment.write( discountAmount( shoppingCart, 20, 'any'));
