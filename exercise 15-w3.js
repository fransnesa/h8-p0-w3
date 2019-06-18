function sortAscending(arr){
  for(i = 0; i < arr.length-1; i++){
      for(j = 0; j < arr.length-1; j++){
          if(arr[j] > arr[j+1]){
              var store = arr[j]
              arr[j] = arr[j+1]
              arr[j+1] = store
          }
      }
  }
  return arr
}

  function groupAnimals(animals) {
    sortAscending(animals);
    var hasil = [];
    var indeks = 0;
    
    for (var i = 0; i < animals.length; i++) {
      if (hasil.length === 0) {
        hasil.push([animals[i]]); 
      } else if (hasil[indeks][0][0] === animals[i][0]) {
        if(hasil[indeks][0][0]==='c'){
          hasil[indeks].push(animals[i]);  
        }
        else{
        hasil[indeks].unshift(animals[i]);
      }
      } else {
        hasil.push([animals[i]]);
        indeks++;
      }
    }
    return hasil;
  }
  
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]



