//common.js
//es6 modules is the new way to organize and reuse code in JavaScript. It allows you to export functions, objects, or values from one file and import them into another file. This promotes modularity and helps keep your code organized and maintainable. Here are some key features of ES6 modules:
// we use two keywords: export and import.

export const PI = 3.14;
function add(a, b) {
    return a + b
}

let human ={
name :"ham"
}
export {human as default, add};

// Template function for rendering a service record