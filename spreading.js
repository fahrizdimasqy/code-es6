//mencari nilai terbesar

const number = [10, 20, 90, 2, 3];
console.log(Math.max(...number));

//menggabungkan nilai array
const allArrays = [...favorites, ...number];
console.log(allArrays);

//mengelompokan nilai pada array destructing, nialai2 array di kelompokan kedalam variabel
const refrigerator = ["Samsung", 50, 2, "milk", "cheese", "egg", "butter"];
const [manufacture, weight, door, ...items] = refrigerator;
console.log(manufacture);
console.log(weight);
console.log(door);
console.log(items);
