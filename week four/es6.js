// let & const, 
// arrow functions, 
// template literals, 
// destructuring, 
// default parameters,
//  spread/rest operators, 
// classes,
// modules, 
// promises, 
// async/await, 
// higher-order functions (map, filter, reduce), 
// and more!
// Higher-order function that takes a template function and returns a new function

let colors = [["red", "green", "blue"], ["red", "green", "blue"]];

let[first, ...others] = colors;
console.log(first);

let person = {
    name: "Alice",
    age: 30,
}

let {name} = person;
console.log(others);