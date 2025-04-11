let output = setTimeout(() => {
  console.log("Hello World");
  return true;
}, 10000);

setTimeout(() => {
  console.log("Hello World 2");
  return true;
}, 20000);
