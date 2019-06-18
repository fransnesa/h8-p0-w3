function balikString(kata) {
  var panjangKata = kata.length;
  var kataBalik="";
  for(i=panjangKata-1;i>=0;i--){
      kataBalik+=kata[i];
  }
  return kataBalik;
}

// TEST CASES
console.log(balikString('hello world!'));