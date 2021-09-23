/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
//1. terdapat 3 variabel: var, let, dan const.
//2.1. variabel var bisa berperan sebagai function-scoped atau globally-scoped variable
//2.1. variabel let berperan sebagai block scope, bekerja dalam kurung {}
//2.3  variabel const berperan sebagai block scope, variabel const digunakan untuk nilai yang tidak berubah (konstanta, misal 1.5)
//3.1. contoh untuk variabel var
var a = 1
console.log(a)

//3.2 contoh untuk variabel let
let nama = "lintang";
let frek = 4;

if (frek > 3) {
     let nama = "lintang ambar";
     console.log(nama);//
    }
else {console.log("frek terlalu kecil")}

//3.3 contoh untuk variabel const
const pengali = 2
function kaliDua (angka) {
    return angka * pengali
}
console.log((kaliDua(3)))

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - yang akan tampil dalam console.log adalah "Mariah",
// - sebab nilai dari variabel name dinyatakan dalam bentuk const yang merupakan block scope, tidak bisa diakses di luar kurung fungsi sehingga yang dijalankan adalah nilai "Mariah Carey"
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
