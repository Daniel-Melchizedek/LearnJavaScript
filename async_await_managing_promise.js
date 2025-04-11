function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise error.");
    }, ms);
  });
}

async function longRunningOperation() {
  let i;
  i = 200;
  return i;
}

async function run() {
  try {
    console.log("Start");
    const response = longRunningOperation();
    console.log(response);
    await promiseTimeout(2000);
    console.log("Stop");
  } catch (ex) {
    console.log("an error occurred.");
    console.log(ex === undefined);
    console.log(ex);
  }
}

run();

console.log("run");
console.log("running");
