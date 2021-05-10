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


// function composition
/* Salah satu karakteristik dari functional programming adalah adanya function composition.
Function composition adalah mengkombinasikan beberapa fungsi menjadi fungsi tunggal.
*/

const user = [
  { name: 'Alex', age: 30 },
  { name: 'Dora', age: 12 },
  { name: 'Xinux', age: 25 },
]

const users = [
 { name: 'Alex', age: 30 },
 { name: 'Dora', age: 12 },
 { name: 'Xinux', age: 25 },
]
/* Dari data tersebut kita ingin mendapatkan nama-nama user yang usianya dewasa (17+), maka ada
setidaknya dua step yang kita harus lakukan, pertama kita filter dan yang kedua kita ambil properti
namanya saja.
*/
const getAdult = (users) => users.filter(user => user.age > 17 )
const getName = (users) => users.map(user => user.name)
// Jalankan fungsi
let adultUser = getAdult(users)
let adultName = getName(adultUser)
console.log(adultName) // [ 'Alex', 'Xinux']
// Cara di atas sih oke saja, namun bisa kita sederhanakan menjadi compose function sebagai berikut:

// Currying Function
/* Fungsi currying adalah teknik untuk mengubah bentuk suatu fungsi dengan beberapa argumen menjadi
sebuah fungsi anak yang berurutan.
Fungsi currying akan mengembalikan fungsi baru yang sesuai dengan argumen berikutnya.
Bentuknya seperti berikut ini:*/
const tambah = (a, b) => a + b
tambah(2, 5) // 7
// currying function
const tambah = a => b => a + b
tambah(2)(5) // 7

// simulasi untuk komputasi berat
const getGreeting = () => {
 let x = 0
 for (let i=0; i<1000000000; i++){
 x += i
 }
 return "Selamat pagi"
}
const say = (callback, name) => {
 const greeting = callback()
 console.log(`${greeting} ${name}`)
}
const users = ['Fuad', 'Hasan', 'Ismi', 'Budi', 'Azhar']
users.map(( user => say(getGreeting, user)))
/* waktu 6 detik
Selamat pagi Fuad
Selamat pagi Hasan
Selamat pagi Ismi
Selamat pagi Budi
Selamat pagi Azhar
*/
/*Pada kode di atas, fungsi say dipanggil sebanyak jumlah user atau 6 kali, di mana pada setiap iterasinya
juga akan menjalankan fungsi getGretting yang kita simulasikan sebagai komputasi berat. Hasilnya
butuh waktu 6 detik.
Mari kita ubah kode di atas menjadi bentuk currying.
 */
 // simulasi untuk komputasi berat
const getGreeting = () => {
 let x = 0
 for (let i=0; i<1000000000; i++){
   x += i
 }
 return "Selamat pagi"
}
// ubah menjadi bentuk currying
const say = (callback) => {
 const greeting = callback()
 return (name) => {
 console.log(`${greeting} ${name}`)
 }
}
const users = ['Fuad', 'Hasan', 'Ismi', 'Budi', 'Azhar']
// say(getGreeting)(users[0])
// say(getGreeting)(users[1])
const sayGretting = say(getGreeting) // jalankan dulu
users.map(( user => sayGretting(user))
