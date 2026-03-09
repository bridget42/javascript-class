let pattern = /mercendes/;
let validator1 = pattern.test("this is a mercendes g-wagon");
let validator2 = pattern.test("this is a toyta");
console.log(validator1)
console.log(validator2)
//anywant in small letters, string, one / more characters
let pattern2 = /^[a-z]+$/
let validator3 = pattern2.test("mark-x");
let validator4 = pattern2.test("vitz");
let validator5 = pattern2.test("audi");
let validator6 = pattern2.test("Volkswagen");
console.log(validator3,validator4,validator5,validator6)

// simple email regular experession
let emailPattern1 = /^[a-z]+@+[a-z]+\.+[a-z]$/   //doesnt cater for numbers, capital letters
let emailPattern2 = /S+@+S+\.+S+/    // any mistakes are misinterpreted e.g @@ will work
let emailPattern3 = /^[^\S@]+@[^\S@]+\.[^\S@]$/   
/*email begins & ends with a character
 [^\S@]- ommits any white space and @ 
/*let sentence = `Alpha said,"we are the best collegues he has ever had."`;
console.log(sentence)
let shoppingList ="this is my shopping list: \n 1.money, \n 2.grab,\n 3.drinks, \n 4.milk, n 5.cereal";
console.log(shoppingList)*/