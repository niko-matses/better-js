// Callback Hell:
// chargeCard('12341234123', (res) => {
//   // time to do something
//   saveToDb(res, () => {
//     // time to do something else
//   })
// });

const chargeCard = () => new Promise((resolve, reject) => {
  // card is valid
  reject("Fail!!! :(");
  if (true) {
    return resolve(true);
  }
  return resolve(false);
});

chargeCard()
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });