/* Fungsi map() digunakan untuk memetakan suatu array dan melakukan operasi tertentu pada setiap
itemnya kemudian mengembalikan array baru.
Fungsi ini merupakan salah satu contoh fungsi pada Javascript yang tidak mutable (immutable)
maksudnya tidak mengubah nilai dari variabel array, adapun perubahannya akan berupa array baru.
Berikut ini format penulisaanya. */
// contoh penulisaanya
var_array_baru = var_array.map(callback);
// atau jika fungsi callback di deklarasikan
var_array_baru = var_array.map(function (item) {
  // lakukan operasi terhadap item dari array
  result = item;
  // kembalikan hasil operasi tersebut
  return result;
});
// atau dalam format arrow function
var_array_baru = var_array.map((item) => {
  result = item;
  return result;
});

/* Fungsi callback akan selalu dijalankan pada setiap iterasi item dari array tersebut. Nah pada bagian ini
kita bisa manfaatkan untuk melakukan operasi tertentu dalam rangka memanipulasi setiap item dari array
yang diberikan.
Sebagai contoh, untuk mengubah format huruf dari setiap item array menjadi format kapital, kodenya
kurang lebih sebagai berikut: */

let users = [
 'Albert', 'Romy', 'Shinta', 'Hendra', 'Fenny', 'Desta'
];
let usersUpperCase = users.map((item) => item.toUpperCase());
console.log(usersUpperCase); // [ 'ALBERT', 'ROMY', 'SHINTA', 'HENDRA',
'FENNY', 'DESTA' ]

// Hal ini juga bisa kita lakukan untuk bentuk array dari object. Contoh:
let users = [
 { name: 'Albert'},
 { name: 'Romy'},
 { name: 'Shinta'}
];
let usersUpperCase = users.map((item) => {
 let nameUpperCase = item.name.toUpperCase()
 return { name: nameUpperCase }
});
console.log(usersUpperCase); // [ { name: 'ALBERT' }, { name: 'ROMY'
}, { name: 'SHINTA' } ]

/* Dengan fungsi map() ini, kita juga bisa melakukan transformasi bentuk array of object menjadi bentuk
array biasa dengan cara mengekstraksi data pada setiap item.
Lihat contoh berikut:*/
let users = [
 { id: 1, name: 'Albert' },
 { id: 2, name: 'Romy' },
 { id: 3, name: 'Shinta' },
];
let userIds = users.map((item) => return item.id)
console.log(userIds) // [ 1, 2, 3 ]

/* Pada ReactJS, fungsi ini dapat digunakan untuk merender data dalam bentuk array.
Misalnya untuk menampilkan menu makanan dalam bentuk HTML list. */
const menus = [
 { name: 'Bakso', price: 15000 },
 { name: 'Mie Ayam', price: 12500 },
 { name: 'Es Teh Manis', price: 4000 },
]
return
 <ul>
 {
 menus && menus.map((menu, index) => {
 <li key={index}>{menu.name} (Rp. {menu.price}) </li>
 })
 }
 </ul>
