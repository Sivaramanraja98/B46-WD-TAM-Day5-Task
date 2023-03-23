titlecaps = arr => 
{
var newarr = [];
var j = 0;
for(var i=0; i<arr.length; i++)
{
A = arr[i].split('');
B = A[0].toUpperCase()
b=A.slice(1,A.length);
c = b.unshift(B);
D =b.join('');
newarr[j]= D;
j++
}
console.log(newarr);
return newarr;
}
arr = ['hi','hello','selva']
titlecaps(arr)
