let removeDuplicates = function (arr) {
    var newarr =  [...new Set(arr)];
    return newarr;
   }
   let arr = ['1','1','2','2']
  console.log(removeDuplicates(arr));
