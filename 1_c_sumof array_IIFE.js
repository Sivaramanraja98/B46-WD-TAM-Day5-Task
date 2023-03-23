arr = ['21','23','45'];
let sumofarray =(function (arr)
{
    let sum=0;
    let j = 0;
    for(var i =0; i<arr.length; i++)
        {
         var num = +arr[i];
         sum += num;
        }
return sum
})(arr);

console.log(sumofarray);
