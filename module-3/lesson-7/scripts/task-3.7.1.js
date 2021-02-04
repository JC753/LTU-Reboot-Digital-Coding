const buttons = document.querySelectorAll('button.selection');

const allimages = document.querySelectorAll('main .image-selections .images');

let filterSearch = document.querySelector('input[name="filter"]');

let filterButton = document.querySelector('button.filter-button');

// toggleimages function
function toggleimages( dataClass ) {

  if( dataClass === 'all') {
      allimages.forEach( function( image ) {
      image.style.display = 'flex';
    });

  } else {

    allimages.forEach( function( image ) {

      if( image.dataset.class === dataClass ) {
          image.style.display = 'flex';
      } else {
        image.style.display = 'none';
      }

    });

    } // End of if/else statement
  } // End of toggleimages function


  // toggleActiveClass
  function toggleActiveClass( active ) {

    buttons.forEach( function( button ) {

      button.classList.remove('active');

    });

      active.classList.add( 'active' );

  } // End of toggleActionClass

// filter button

filterButton.addEventListener('click', function() {

  let inputValue = filterSearch.value;

  let searchTerm = inputValue.toLowerCase();

  toggleimages( searchTerm );
  
  buttons.forEach( function( button ) {

    let dataClass = button.getAttribute('data-class');

    if( dataClass === searchTerm ) {

      button.classList.add( 'active');

    } else {

      button.classList.remove( 'active');

    } // End of if/else statement

    filterSearch.value = '';

  }); // End of forEach loop
 
}); // End of filter button event listener

  buttons.forEach( function( button ) {

    button.addEventListener('click', function() {
          
          let dataclass = button.dataset.class
          toggleimages( dataclass );

          toggleActiveClass( button );
    });

  }); // End of forEach Statement
