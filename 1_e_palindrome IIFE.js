arr = ['454','595','696','123','odd','radar'];
let palindromearr = (function (arr)
{
let palindrome = [];
let j = 0;

for(var i=0; i<arr.length; i++)
{
    let arrsp = arr[i].split("");
    let arrrev = arrsp.reverse();
    let arrjoin = arrrev.join("");
    if(arr[i] == arrjoin)
    {
    
       palindrome[j] = arr[i] ;
       j++
    }
}
return palindrome
})(arr);

console.log(palindromearr);
