function checkSingleNumber(num) {
  const value = num.filter((element) => console.log(num.indexOf(element) !== element));
  return value;
}

const array = [4, 1, 2, 1, 2];
console.log(checkSingleNumber(array));
