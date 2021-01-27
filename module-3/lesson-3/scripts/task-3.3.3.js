function calculator( number1, number2, operator) {

  switch( operator ) {
    
    case "+" :
      result = number1 + number2;
      
      document.write( number1 + " + " + number2 + " = " +  result + "<br>" );
    break;

    case "-" :
      result = number1 - number2;

      document.write( number1 + " - " + number2 + " = " +  result + "<br>" );
    break;

    case "*" :
      result = number1 * number2;

      document.write( number1 + " * " + number2 + " = " +  result + "<br>"  );
    break;

    case "/" :
      result = number1 / number2;

      document.write( number1 + " / " + number2 + " = " +  result + "<br>" );
    break;

  }
}


calculator(2, 2, "+" );
calculator(4, 2, "-" );
calculator(4, 2, "*" );
calculator(6, 2, "/" );