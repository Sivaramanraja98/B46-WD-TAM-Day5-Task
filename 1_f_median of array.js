let median = function (arr1,arr2)
{
    let arr = [...arr1,...arr2];
    let arrsort = arr.sort();
    let arrlen = arrsort.length
    c = arrlen/2;
    c1 = c-1;
    let media = (arrsort[c]+arrsort[c1])/2;
return media
}

let a = [23,45,12];
let b = [17,25,18];
console.log(median(a,b));
