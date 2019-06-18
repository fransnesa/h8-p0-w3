var data = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];
            
function dataHandling(data){
for(var i=0;i<data.length;i++){
    var ID="";
var nama="";
var tempatTanggalLahir="";
var hobi="";
    for(var j=0;j<=data.length;j++){
    if(j===0){
        ID=data[i][j];
   }
   else if(j===1){
    nama=data[i][j];
   }
   else if(j===2||j===3){
    tempatTanggalLahir =tempatTanggalLahir+" "+data[i][j]; 
}
else if(j===4){
    hobi=data[i][j];
}
}
console.log("Nomor ID: "+ID);
console.log("Nama Lengkap: "+nama);
console.log("TTL: "+tempatTanggalLahir);
console.log("Hobi: "+hobi);
}
}

dataHandling(data);