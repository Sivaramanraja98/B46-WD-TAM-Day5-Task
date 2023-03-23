let primearr = num => {
  let result = [];

  let isPrime = num => {
    if (num < 2) return false;

    for (let k = 2; k < num; k++) {
      if (num % k == 0) {
        return false;
      }
    }
    return true;
  }

  num.forEach(element => {
    const item = isPrime(element);
    if (item) {
      result.push(element);
    }
  });

  return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let arrprime = primearr(arr);
console.log(arrprime);
