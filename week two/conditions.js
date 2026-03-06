console.log("vehicle arrives");
console.log("calculate fee");
console.log("print reciept");
//control flow structures, these are decisions/ conditional statements
//this is an if statement

let hoursPacked = 2;
if (hoursPacked < 3) {
  console.log("apply short pay fee");
}
//tenary operator
//condition ? expression iftrue: expressionIfFalse:
let hoursPacked1 = 3;
let fee = hoursPacked1 < 3 ? 2000 : 3000;
console.log(fee);

let eligibilty;
let age = 20;
if (age >= 18) {
  eligibilty = "you can vote.";
} else {
  eligibilty = "you are not eligible to vote yet.";
}

//if turned into a tenary operator, then. other option of writing it
//age >= 18 ? eligibilty="you can vote.": eligibilty="you are not eligible to vote yet.";

//this is an if-else statement
let vehicleType = "truck";
if (vehicleType === "truck") {
  console.log("charge 5000");
} else {
  console.log("pay 3000");
}

//this is an else-if statement
let vehicleType1 = "taxi";
if (vehicleType1 === "truck") {
  console.log("charge 5000");
} else if (vehicleType1 === "taxi") {
  console.log("pay 4000");
} else {
  console.log("pay 3000");
}

//switch statement, alt for else-if and it is clean
let vehicleType2 = "taxi";
switch (vehicleType2) {
  case "truck":
    console.log("pay 5000");
    break;
  case "taxi":
    console.log("pay 3000");
    break;
  case "boda boda":
    console.log("pay 2000");
    break;
  default:
    console.log("unknown vehicle type");
}

function calculateFee(vehicleType, hoursParked) {
  if (hoursParked < 3) {
    console.log("Pay 2000");
  } else {
    switch (vehicleType) {
      case "Truck":
        console.log("Pay 5000");
        break;
      case "Taxi":
        console.log("Pay 3000");
        break;
      case "Boda Boda":
        console.log("Pay 2000");
        break;
      default:
        console.log("Unknown Vehicle type");
    }
  }
}
calculateFee("Coaster", 1);
let number = prompt("Enter a number:");
switch (true) {
  case number > 0:
    alert("Number is positive");
    break;
  case number === 0:
    console.log("The number entered is a zero");
    break;
  case number < 0:
    console.log("The number is negative");
    break;
  default:
    console.log("Not a number");
}

//Syntax for If statements
//if(condition) {Code runs if the condition is true}

//Syntax for If else statements
//if(condition) {Code runs if the condition is true} else{The code runs if the condition is false}

////Syntax for else-If statements
//if(condition) {Code runs if the condition is true} else if{Another condition to check} else{Runs if both aren't true}

//Syntax for switch
/*switch(what is being checked/case value) {
    case condition:
        if true;
        break;
    default
}
*/

//-Repetition/Loop
//It is about doing things multiple times
//-Conditional Logic
