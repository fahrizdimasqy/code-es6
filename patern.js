// Imperative berfokus pada gambaran bagaimana suatu program beroperasi, ada step by stepnya.

// Deklarative berfokus pada apa yang harus dicapai oleh program tanpa menjabarkan step by stepny
// contoh Imperative
const products = [
  { id: 1, name: "buku", qty: 7, price: 7000 },
  { id: 2, name: "pensil", qty: 2, price: 4000 },
  { id: 3, name: "rautan", qty: 1, price: 2000 },
  { id: 4, name: "bulpoin", qty: 10, price: 2000 },
  { id: 5, name: "penggaris", qty: 2, price: 2000 },
];
/* Imperative Pattern */
let restock = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].qty < 5) {
    restock.push(products[i]);
  }
}
console.log(restock);
/*
[
 { id: 2, name: 'pensil', qty: 2, price: 4000 },
 { id: 3, name: 'rautan', qty: 1, price: 2000 },
 { id: 5, name: 'penggaris', qty: 2, price: 2000 }
]
*/

/*
Kode diatas,
pertama kali disiapkan variabel restok dengan nilai array kosong,
lalu dengan menggunakan perulangan for,
iterasi dilakukan berdasarkan panjang arraynya,
diawali dengan definisi variabel i bernilai 0 sebagai index pertama,
kemudian dilakukan pengecekan apakah nilai dari variabel i lebih kecil dari panjang array,
kemudian pada setiap iterasinya nilai i ditambah dengan 1 atau increment
kemudian masih pada iterasi tersebut dilakukan pengecekan apakah key qty pada item dengan index
itu nilainya kurang dari tiga atau tidak,
jika kurang dari tiga maka item tersebut dimasukkan ke dalam variabel restock.
Pendekatan ini menggambarkan step by step bagaimana kode program dioperasikan untuk output yang
diinginkan. Lalu bagaimana bentuk declarativenya?
*/

// declataive Pattern
const products = [
  { id: 1, name: "buku", qty: 7, price: 7000 },
  { id: 2, name: "pensil", qty: 2, price: 4000 },
  { id: 3, name: "rautan", qty: 1, price: 2000 },
  { id: 4, name: "bulpoin", qty: 10, price: 2000 },
  { id: 5, name: "penggaris", qty: 2, price: 2000 },
];
/* Declarative Pattern */
function isRestock(qty) {
  return qty < 5;
}
const restock = products.filter((item) => {
  return isRestock(item.qty);
});
console.log(restock);
/*
[
 { id: 2, name: 'pensil', qty: 2, price: 4000 },
 { id: 3, name: 'rautan', qty: 1, price: 2000 },
 { id: 5, name: 'penggaris', qty: 2, price: 2000 }
]
*/

/*
Berbeda dengan kode sebelumnya, pada kode di atas, mula-mula dideklarasikan ketentuan restock jika
qty kurang dari lima melalui fungsi isRestock.
Kemudian dengan menggunakan fungsi filter dipangillah fungsi isRestock pada tiap iterasinya, maka
item yang terpenuhi kemudian akan dikembalikan dan disimpan dalam variabel restock.
Nah, pendekatan kedua inilah declarative pattern. Functional programming itu sebisa mungkin
menggunakan declarative pattern.

*/
