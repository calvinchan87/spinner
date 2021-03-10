var spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
var count = 0;

// for (let x = 0; x <= spinnerArray.length - 1; x++) {
//   setTimeout(() => {
//     process.stdout.write(spinnerArray[x])
//     }, 100 + count);
//     count = count + 200;
// }

for (let symbol of spinnerArray) {
  setTimeout(() => {
    process.stdout.write(symbol)
    }, 100 + count);
    count += 200;
}

  setTimeout(() => {
    console.log();
  }, 1900);