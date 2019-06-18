var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(input){
input.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
input.splice(4,1,"Pria", "SMA Internasional Metro");
console.log(input);
var ttl = input[3].split("/");
var bulan = ttl[1];
switch (bulan) {
    case "01":
    bulan = 'Januari';
    break;
    case "02":
    bulan = 'Februari';
    break;
    case "03":
    bulan = 'Maret';
    break;
    case "04":
    bulan = 'April';
    break;
    case "05":
    bulan = 'Mei';
    break;
    case "06":
    bulan = 'Juni';
    break;
    case "07":
    bulan = 'Juli';
    break;
    case "08":
    bulan = 'Agustus';
    break;
    case "09":
    bulan = 'September';
    break;
    case "10":
    bulan = 'Oktober';
    break;
    case "11":
    bulan = 'November';
    break;
    case "12":
    bulan = 'Desember';
    break;
}

console.log(bulan);
ttl.sort(function(value1, value2) { return value1 - value2 });
console.log(ttl);
var ttl2= input[3].split("/");
var gabung = ttl2.join("-");
console.log(gabung);
var nama = input[1];
var potong = nama.slice(0,15);
console.log(potong);
}

dataHandling2(input);