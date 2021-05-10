// penulisan filter
var_array_baru = var_array.filter(callback);
// atau dalam format arrow function
var_array_baru = var_array.filter((item) => {
  result = true;
  return result;
});
//  Sebagai contoh, kita hanya ingin mengambil bilangan ganjil dari baris bilangan tertentu.
const bilangan = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ganjil = bilangan.filter((item) => item % 2 === 1);
console.log(ganjil);
/*
[ 1, 3, 5, 7, 9 ]
*/
// Contoh lain, misalnya kita hanya ingin menampilkan data user yang jenis kelaminnya laki-laki saja
let users = [
  { id: 1, name: "Albert", gender: "male" },
  { id: 2, name: "Romy", gender: "male" },
  { id: 3, name: "Shinta", gender: "female" },
  { id: 4, name: "Hendra", gender: "male" },
  { id: 5, name: "Fenny", gender: "female" },
  { id: 6, name: "Desta", gender: "male" },
];
let maleUsers = users.filter((item) => {
  return item.gender === "male";
});
console.log(maleUsers);
/* hasilnya
[
 { id: 1, name: 'Albert', gender: 'male' },
 { id: 2, name: 'Romy', gender: 'male' },
 { id: 4, name: 'Hendra', gender: 'male' },
 { id: 6, name: 'Desta', gender: 'male' }
]
*/
