let arr = ['1','2','3','4','5','6']
let k = 3
let rotatearray = (function (arr, k) {
    k = k % arr.length;
    A = arr.slice(k);
    B = arr.slice(0, k);
    arr = A.concat(B);
    return arr;
  })(arr,k)
  console.log(rotatearray);
