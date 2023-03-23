const sumofarray = arr => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = +arr[i];
    sum += num;
  }

  return sum;
}

const arr = ['21', '23', '45'];
console.log(sumofarray(arr));
