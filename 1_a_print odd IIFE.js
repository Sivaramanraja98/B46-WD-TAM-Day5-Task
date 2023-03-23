let at = [1,2,3,4,5,6,7,8,9]
let odd = (function(arr)
{
    let odd =[];
    let j = 0;
    for(var i =0; i<arr.length; i++)
        {
            var num = +arr[i];
            var mod = num%2;
            if(mod != 0)
            {
             odd[j] = arr[i];
             j++
            }
        }
    return odd;
})(at);

console.log(odd);
