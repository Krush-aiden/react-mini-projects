function checkPromise() {
  return new Promise((resolve, reject) => {
    if ((value = 5)) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}

checkPromise(5).then((result) => {
  console.log(result);
});
