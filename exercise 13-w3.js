function targetTerdekat(arr) {
    var x =[];
    var o = [];
    var jarak="";
    var jarakArray = [];
  for(var i=0; i<=arr.length-1;i++){
    if(arr[i] === 'o'){
        o.push(i)
       } else if(arr[i] === 'x'){
        x.push(i)
       }
       }
       if(x.length === 0 || o.length===0){
         return 0;
       } 
       else {
         for(var i=0;i<=o.length-1;i++){
         for(var j=0;j<=x.length-1;j++){
            jarakArray.push(Math.abs(o[i]-x[j]));
         }
       }
        (jarakArray.sort(function(a, b){return a - b}));
        return jarakArray[0];
       }
  }


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', 'o', 'x', ' ', 'x'])); //1
console.log(targetTerdekat(['o', ' ', ' ', 'o', 'x', 'x', 'x'])); // 1
console.log(targetTerdekat(['x', ' ', ' ', 'o', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1