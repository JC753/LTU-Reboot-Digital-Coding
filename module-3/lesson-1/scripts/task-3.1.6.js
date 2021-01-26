// var preTipTotal = 30;
// var tipPercent = 1.2;
// -totalBill = preTipTotal * tipPercent;
// document.write(totalBill);

var mealPriceTip = 30;
var tipAmount = 20

var tipAmount = (mealPriceTip * tipAmount) / 100;

var receipt = 'Your Total bill with tip is : ' + '£' + (mealPriceTip + tipAmount) + '<br>';

document.write( receipt );

var totalPrice = mealPriceTip + tipAmount;

document.write ( 'Your tip amount was: ' + '£' + tipAmount.toFixed( 2) + '<br>' + totalPrice.toFixed(2));