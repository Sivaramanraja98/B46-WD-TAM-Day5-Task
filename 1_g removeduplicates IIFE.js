let arr = ['1','1','2','2','3','4']
let removeDuplicates = (function (arr) {
    var newarr =  [...new Set(arr)];
    return newarr;
   })(arr);
   
  console.log(removeDuplicates);
