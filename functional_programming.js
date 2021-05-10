//  Pure function
/* fungsi harus selalu memberikan nilai balik yang sama untuk argumen atau parameter yang sama.
Termasuk juga, fungsi tidak boleh bergantung pada mutable variabel (let) diluar fungsi
 */
function multiply(x, y) {
  return x * y;
}

/* Jika fungsi ini dipanggil berkali kali, asal nilai x dan y yang digunakan sama pada setiap iterasinya, maka
akan selalu menghasilkan nilai yang sama. Fungsi ini juga tidak memiliki efek samping (side effect) yang
lain*/

// penulisan pure function
// contoh 1
const pi = 22,7;
function luasLingkaran(radius) {
 return pi * radius * radius
}
// cara kedua
function luasLingkaran(radius) {
 const pi = 22/7
 return pi * radius * radius
}
// cara ketiga
function luasLingkaran(radius, pi = 22/7) {
 return pi * radius * radius
}

// object gunakan freeze
const kostanta = Object.freeze({
    pi:22/7
})

// first class function yang artinya fungsi bertindak layknya class bsa memanggil fungsi didalam Fungsi

function HitungLuasLingkaran(radius) {
  const pi = 22/7;
  const luas = (r) => pi * r * r; //fungsi
  const lebar = (r) => 2 * pi *r //fungsi
  console.log(`Luas: ${luas(radius)}`)
  console.log(`Lebar: ${lebar(radius)}`)
}
HitungLuasLingkaran(7)

// hasil Luas: 154
// hasil Lebar: 44

// High Order function
// HOF adalah fungsi yang menerima fungsi lain sebagai argumen dan mengembalikan fungsi. Perhatikan contoh berikut:
const luas = (r) => 22/7*r*r
const lebar = (r) => 2*22/6*r

const hitung = (fn) => {
  return (...arg) => {
    return fn(...arg)
  }
}
const hitungLuas = hitung(luas)
const hitungLebar = hitung(lebar)
console.log(hitungLuas(7))
console.log(hitungLebar(7))
