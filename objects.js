/*Start*/
//How can you represent real-world objects in code?
//They have assoicated attributes = object PROPERTIES.
//They hava associated actions = object METHODS.
//They have assoicated context = "this"

//First
//Let's define a simple object (with no properties or methods)
console.log("Simplest object---------");
const blank = {};
console.log("Blank type:", typeof blank);
console.log("Blank value:", blank);
//Next
console.log("Object with properties---------");
const book = {
  title: "1984",
  author: "George Orwell",
  isAvailable: false,
};
console.log("Book type:", typeof book);
console.log("Book value", book);

//Next
//Let's add actions we can take on it
//Note that these are properties too - defined as functions
console.log("Object with methods---");
const book_ = {
  title: "1984",
  author: "George Orwell",
  isAvailable: false,
  checkIn: function () {
    this.isAvailable = true;
  },
  checkOut: function () {
    this.isAvailable = false;
  },
};

console.log("Book type:", typeof book_);
console.log("Book value:", book_);
//Construtor
console.log("Object with constructor---------");
const book$_ = new Object();
console.log("\n--Define book:");
console.log("Book type:", typeof book$_);
console.log("Book value:", book$_);

const data = { title: "1984", author: "George Orwell" };
const book1 = new Object(data);
console.log("---Define book1 with data");
console.log("Book1 type:", typeof book1);
console.log("Book1 value:", book1);

const dataFunc = {
  title: "1984",
  author: "George Orwell",
  isAvailable: true,
  checkIn: function () {
    this.isAvailable = true;
  },
  checkOut: function () {
    this.isAvailable = false;
  },
};
const book2 = new Object(dataFunc);
console.log("\n---Define book2 with data and functions.");
console.log("Book2 type:", typeof book2);
console.log("Book2 value:\n", book2);

//Dot Notation
console.log(book2.author);
book2.author = "G. Orwell";
console.log(book2);

//Brackets Notation
console.log(book2["author"]);
book2["author"] = "Daniel Samuel";
console.log(book2);
//Dot Notation
console.log(book2.isAvailable);
book2.checkOut();
console.log(book2);

//Bracket Notation
console.log(book2["isAvailable"]);
book2["checkIn"]();
console.log(book2);
//Last
console.log("This keyword----------");
const bookObj = {
  checkIn: function () {
    return this;
  },
};
console.log("\n this is: ", bookObj.checkIn());
console.log(bookObj.checkIn() === globalThis);
function anotherCheckIn() {
  return this;
}
console.log("\n this is: ", anotherCheckIn());
console.log(anotherCheckIn() === globalThis);
