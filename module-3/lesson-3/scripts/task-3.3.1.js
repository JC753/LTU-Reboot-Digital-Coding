function percentageCalculator (number, percentDiscount) {
  let percentDiscount = ( number * percentDiscount ) / 100;
  return percentDiscount;
}

  let percentDiscount = 3.5;
  let number = 300;

  document.write(percentageCalculator( 300 , 3.5 ) );


// function percentageCalculator ( number, percentage ) {
// let percentageOf = ( number * percentage ) / 100;
// return percentageOf;
// }

// let percentage = 3.5;
// let number = 100

// document.write( percentageCalculator( 300 , 3.5 ) );
// document.write( percentageCalculator( 640 , 14 ) );