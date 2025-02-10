function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetspeed = Math.floor(10 * Math.random()) + 1;
    if (internetspeed > 4) {
      console.log(`your ${data} is saved  in memory`);
      resolve("You have got the success");
    } else {
      console.log(`your ${data} is not saved in memory `);
      reject("you have failed");
    }
  });
}
