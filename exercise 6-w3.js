function angkaPalindrome(num) {
while(true){
  num++;
  var nomor = num.toString();
        var balikAngka = nomor.split('').reverse().join('');
        if(nomor === balikAngka){
          return parseInt(balikAngka);
        }
}      
}  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001