//usage of function
var hello;
hello = function(){
    return "Hello world";
}
console.log(hello());

//arrow function
//with one varaiable
var multiply = (x, y) => { return x * y};

console.log(multiply(7, 7));

//arrow function return value by default
var multiply = () => "Hello world!";

console.log(multiply());

//arrow functions with parameters
var multiply = (val) => "Hello world!" + val;

console.log(multiply("deeksha"));

//arrow functions without parentheses
var multiply = val => "Hello world!\n" + val;

console.log(multiply("deeksha"));

//split() Method
var ip = "17.16.171.191";
var res = ip.split(".");
console.log(res);
//output [ '17', '16', '171', '191' ]

//split("separator", limit) Method
var ip = "17.16.171.191";
var res = ip.split(".", 3);
console.log(res); 
//output [ '17', '16', '171' ]

//find() method
var ip = "17.16.171.191";
var res = ip.split("1");
var ele = res.find(function(element) { return element });
console.log(res);
console.log(ele);

//slice() method - gives any element between those elements 
var ip = "17.16.171.191";
var res = ip.split(".");
var ele = res.slice(1,2);
console.log(res);
console.log(ele);

//includes(searchvalue, start) method- gives true if search value is found otherwise false
var ip = "Hello world, welcome to the universe.";
var res = ip.includes("to",22);
console.log(res);

// 

