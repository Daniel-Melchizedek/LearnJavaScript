let arr1 = ["A", true, 2];
//Push and pop
console.log("\n***Push and pop***\n");
console.log(arr1.push("new value"));
console.log(arr1);
console.log(arr1.pop()); //removes last element
console.log(arr1); //removes last element

//Shift and unshift
console.log("\n***Shift and unshift***\n");
console.log(arr1.unshift("new value")); //adds to the beginning
console.log(arr1);
console.log(arr1.shift()); //removes first element
console.log(arr1); //removes first element

//Concat
console.log("\n***Concat***\n");
let arr2 = ["B", false, 3];
let newArr = arr1.concat(arr2);
console.log(newArr);
let newArr2 = arr2.concat([1, 2, 3]);
console.log(newArr2);
