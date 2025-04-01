const peopole = ["Aaron", "Mel", "John"];
const one = new Number(1);
const str = new String("Hello World");
const b = new Boolean(true);
const person = {
  firstName: "Aaron",
  lastName: "Powell",
};

function sayHello(person){
    console.log("Hello" + person.name);
}

console.log("--typeof--");
console.log(typeof peopole); // object
console.log(typeof one); // number
console.log(typeof str); // string
console.log(typeof b); // boolean
console.log(typeof person); // object
console.log(typeof sayHello); // function
console.log("--instanceof--");
console.log(peopole instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);