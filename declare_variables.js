//var - function scope
//const - block scope
//let - block scope
var hello="Hello";

console.log(hello);
hello="Hello World";
console.log(hello);

if(true)
{

    let world = "Hello World";
}
//console.log(world);

const daniel = "Daniel";
console.log(daniel);
daniel = "Samuel";
