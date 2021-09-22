/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) {
    if(salary < 5000000){
        return 0 * salary;
    }else if(salary >= 5000000) {
        return 5/100 * salary;
    }else if(salary >= 10000000) {
        return 10/100 * salary;
    }else if(salary >= 20000000) {
        return 20/100 * salary;
    }
}

console.log(taxCalc(5000000));


/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(height, weight) {
    console.log("height",  height);
    console.log("weight",  weight);
    function bmiStatus(height, weight) {
        if (weight/(height^2) * 1000 < 18.5) {
            return "under weight";
        }else if (weight/(height^2) * 1000 >= 18.5) {
            return "normal";
        }else if (weight/(height^2) * 1000 >= 25) {
            return "over weight";
        }else if (weight/(height^2) * 1000 >= 30) {
                return "obese";
        }else if (weight/(height^2) * 1000 > 35) {
            return "extremely obese";
        }
    }
    console.log("check BMI should be " + (bmiStatus(height,weight)))
}

checkBMI(80, 170)


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(sentence) {
    var perkata = sentence.toLowerCase().split(' ');
    for (var i = 0; i < perkata.length; i++) {
        perkata[i] = perkata[i].charAt(0).toUpperCase() +
        perkata[i].substring(1);
    }
    return perkata.join(' ');
 }
 console.log(convToUpperCase("linTang ambAr"));


/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedChar(word) {
    if (word.indexOf(' ') >= 0) {
        console.log("kata tidak boleh dipisah")
    } else {
        for (let i = 0; i < word.length; i++) {
            let hurufKeI = word.charAt(i);
            if (word.indexOf(hurufKeI) == i && word.indexOf(hurufKeI, i + 1) == -1) {
                return hurufKeI;
            }
    }
    return " ";
}
}

console.log(firstNonRepeatedChar("hello world"))
