/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE

for (let i = 1; i <= 100; i++) {
    var eliminasi = false;
    for (let n = 2; n <= i; n++) {
        if (i%n==0 && i!==n) {
            eliminasi = true;
        }
    }
    if (eliminasi == false) {
        console.log(i)
    }
}


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime = 0;
let i = 1;

while (primeCounter < 50) {
    i++;
    var eliminasi = false;
    for (let n = 2; n <= i; n++) {
        if (i%n==0 && i!==n) {
            eliminasi = true;
        }
    }
    if (eliminasi == false) {
                primeCounter++;
                fiftiethPrime = i;
    }
}
console.log(fiftiethPrime);


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd = 0;
let i = 0;

do {
    i++;
    var eliminasi = false;
    if (i%2 === 0) {eliminasi = true;
        }
    if (eliminasi == false) {
                oddCounter++;
                fiftiethOdd = i;
    }
}while (oddCounter < 50)

console.log(fiftiethOdd);