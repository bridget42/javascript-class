//  PRESENTATION: ARRAYS IN JAVASCRIPT
/*An array is a special variable that stores multiple values in a single variable.
let student1 = "John";
let student2 = "Mary";
let student3 = "Peter";
*/

let students = ["John", "Mary", "Peter"];
 //Arrays help organize related data.
/*
Why Do We Use Arrays?
We use arrays when:
We have multiple related values
We want to loop through data
We want to perform operations on many items
Examples:
    List of students
    List of products
    List of scores
    List of users
    */
//    there are two ways of creating arrays
let numbers = [1, 2, 3, 4, 5]; //mostly used
let numbers1 = new Array(1, 2, 3, 4, 5);

// array index
let fruits = ["Apple", "Mango", "Orange"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Mango
console.log(fruits[2]); // Orange

// We can modify array elements using index.
let fruitss = ["Apple", "Mango", "Orange"];
fruits[1] = "Banana";
console.log(fruits); //["Apple", "Banana", "Orange"]

// Array Length To check how many elements are inside an array:
console.log(fruits.length);

// Adding and Removing Elements in an array
let cars = ["subaru", "ractis", "audi"];
cars.push("benz");// .push to add
console.log(cars);

cars.pop("benz");// .pop to remove
cars.unshift("mitsubish"); //adding a value at the begining of the array
cars.shift("mitsubish")//removing a value at the begining of the array

/* Using map() with Cars
map() creates a new array by transforming each item.*/
//Example Get all vehicle number plates
let vehicless = [
    { driver: "John", type: "Truck", plate: "UAA12", fee: 5000 },
    { driver: "Sarah", type: "Personal Car", plate: "UBB45", fee: 3000 },
    { driver: "Peter", type: "Taxi", plate: "UCC78", fee: 3000 }
];

let plates = vehicless.map(function (vehicle) {
    return vehicle.plate;
});
console.log(plates);//["UAA12", "UBB45", "UCC78"] ie map() extracts or transforms data.

/* Using filter() with Cars
filter() selects items based on a condition.

Example Get all Trucks only */
let trucks = vehicless.filter(function (vehicle) {
    return vehicle.type === "Truck";
});

console.log(trucks);

/*Output:
[
  { driver: "John", type: "Truck", plate: "UAA12", fee: 5000 }
]
*/

vehicles.push({
    driver: "Bridget",
    type: "Coaster",
    plate: "UDD56",
    fee: 4000
});

console.log(vehicles);
 let vehicles = [
  { receipt: "R001", driver: "Evelyn", fee: 5000 },
  { receipt: "R002", driver: "Kevin", fee: 3000 }
];

// let searchedVehicle = vehicles.find(function(vehicle) {
//   return vehicle.receipt === "R002";
// });
// // console.log(searchedVehicle);
// vehicles.push(
//     {  driver: "ATB", fee: 3000 }
// );
// console.log(vehicles);
// findingout how much you made in a day
let signedOutVehicles = [
  { driver: "John", fee: 5000 },
  { driver: "Sarah", fee: 3000 }
];

let total = signedOutVehicles.reduce(function(sum, vehicle) {
  return sum + vehicle.fee;
},0);

console.log("Total Daily Revenue:", total);