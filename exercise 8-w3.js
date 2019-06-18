function pasanganTerbesar(num) {
    // you can only write your code here!
    var pasangArray = [];
    var nomor = num.toString();
    for(i = 0; i < nomor.length; i++){
    var pasang = '';
    pasang = nomor[i] + nomor[i+1]
    pasangArray.push(pasang);
    }
   pasangArray.sort(function(a,b){return a < b});
   var terbesar = parseInt(pasangArray[0]);
   return terbesar
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99