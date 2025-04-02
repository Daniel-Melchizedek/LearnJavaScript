//Adding data during creation
console.log("\n****Adding data during creation****\n");
let arr1=["A",true,2];
console.log(arr1[0]);
console.log(arr1[1]);
//Adding data after creation
console.log("\n****Adding data after creation****\n");
let arrayLength = 2;
let arr2 = new Array(arrayLength);
arr2[0] = "Value at index 0";
console.log(arr2[0]);
console.log(arr2[1]); // No value present at index

//Length and index
console.log("\n***Length and index***\n");
console.log(arr1.length);
console.log(arr1[3]); //does not exist.
console.log(arr1[2]);//Last index of the array.
console.log(arr1[arr1.length-1]);//Equals 2.
console.log("\n****Length and index Part 2***\n");
let arr3 = new Array(3); //Empty array of length 3.
arr3[2]="Adding a value!";
console.log(arr3[2]);
console.log(arr3[arr3.length-1]); //undefined
console.log(arr3[0]); //undefined
console.log(arr3[1]); //undefined
//play with length
console.log("\n****Play with length****\n");
let arr4 = new Array(1);
arr4[0] = "Daniel";
console.log(arr4[0]);
console.log(arr4[1]);
console.log(arr4[2]);
arr4[1] = "John";
arr4[2] = "Smith";
arr4[10]="Last value!";
console.log(`Array length:${arr4.length}`);
console.log(arr4[1]);
console.log(arr4[2]);
