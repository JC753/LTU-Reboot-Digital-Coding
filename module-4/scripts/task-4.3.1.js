// The Problem:
/*

1. Write a program that prints the numbers from 1 to 100
2. For numbers which are multiples of both three and five print 'fizzbuzz' instead of the number.
3. For multiples of three print 'fizz' instead of the number
4. For multiples of three ptint 'buzz' instead of the number
5. For numbers that are not multiples of three, five, or both, print the number as is.

*/


// FOR LOOP
// Set counter to 1
// Break when counter reaches 100
// Increment counter by 1

// IF number MOD 3 === 0 AND number MOD 5 === 0
    // print 'fizzbuzz'
// ELSE IF number MOD 3 === 0
    // print 'fizz'
// ELSE IF number MOD 5 === 0
    // print 'buzz'
// ELSE
    // print number

function fizzBuzz(number) {

for (let number = 1; number <= 100; number++) {

  if ( number % 3 === 0 && number % 5 === 0) {
    console.log('fizzbuzz');
  } else if( number % 3 === 0) {
    console.log('fizz');
  } else if( number % 5 === 0) {
    console.log('buzz');
  } else {
    console.log( number );
  }
  

}
}

fizzBuzz(100)