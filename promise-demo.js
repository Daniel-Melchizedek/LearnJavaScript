function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ms === 1000 ? reject() : resolve();
    }, ms);
  });
}

promiseTimeout(2000)
  .then(() => {
    console.log(`done`);
    return promiseTimeout(500);
  })
  .then(() => {
    console.log(`Also done`);
    return Promise.resolve(25);
  })
  .then((v) => {
    console.log(`final success!${v}`);
  })
  .catch(() => {
    console.log("Error!");
  });
