let fullName = document.querySelector('input[name="full-name"]');

let submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener( 'click', function( event ) {

  event.preventDefault();
  console.log( fullName.value );

});