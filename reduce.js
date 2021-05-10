result = var_array.reduce((resutSebelumnya, item) => {
 return resutSebelumnya operator item
},
// Sebagai contoh, kita ingin menghitung jumlah total dan rata-rata dari array baris bilangan.
const bilangan = [1,2,3,4,5,6,7,8,9]
// jumlah total
total = bilangan.reduce((sum, item) => sum + item, 0)
console.log(total) // 45
// rata-rata
rata2 = bilangan.reduce((sum, item, idx, array) => {
 sum = sum + item
 return idx === array.length - 1 ? sum / array.length : sum
}, 0)
console.log(rata2) // 5
// Contoh lain, untuk menghitung total belanja dari sebuah keranjang belanja.
const cart = [
 {id:1, name:'buku', qty:5, price:7000},
 {id:2, name:'pensil', qty:2, price:4000},
 {id:3, name:'rautan', qty:1, price:2000},
]
const totalBelanja = cart.reduce((total, item) => {
 return total + (item.qty * item.price)
}, 0)
console.log(totalBelanja) // 45000
