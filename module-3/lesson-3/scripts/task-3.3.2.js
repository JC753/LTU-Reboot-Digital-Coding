function drinkOrder( size, drink ) {

  switch( drink ) {

    case 'cola' : 
      document.write('You have ordered a ' + size + ' ' + drink);
      break;
    
      case 'fanta' :
      document.write('You have ordered a ' + drink);
      break;

      case 'lemonade' :
      document.write('You have ordered a ' + drink);
      break;

    default:
      document.write("error");
      break;
  }

}

drinkOrder("small", "Cola");