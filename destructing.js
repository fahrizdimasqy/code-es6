//desctricting arr:ay
const foods = ["pie", "karoket", "cilok"];

const myFood = foods[0];
const yourFood = foods[1];
const otherFood = foods[2];

console.log(myFood, yourFood, otherFood);

//destructing object

const peoples = {
  firstName: "fahriz",
  lasName: "dimas",
  age: 20,
};

const firstName = peoples.firstName;
const lasName = peoples.lasName;
const age = peoples.age;

console.log(firstName, lasName, age);

//constructing objek es6
const profile = {
  fullName: "Fahriz Dimasqy",
  gender: "male",
  umur: 20,
};

const { fullName, gender, umur } = profile;

console.log(fullName, gender, umur);

//destructing pada variabel yang sudah ada
const profile1 = {
  namaSaya: "Fahriz Dimasqy",
  gender: "Male",
};

let namaSaya = "Kidto";
({ namaSaya } = profile1);
console.log(namaSaya);

//destruting deiffrent name local variabel

const laptop = {
  merek: "asus",
  harga: "122222",
};
const { merek: localMerek, harga: localHarga } = laptop;
console.log(localMerek, localHarga);

//destruting array
const aktris = ["ariel", "desta", "sule"];
const [myFavoriteAktris, yourAktris, komediAktris] = aktris;
console.log(myFavoriteAktris);
console.log(yourAktris);
console.log(komediAktris);
//console.log(,,komediAktris);

//destructing assignment array
//
const friends = ["asep", "gema", "tian"];
let myFriend = "ismat";
let yourFriend = "aji";

[myFriend, yourFriend] = friends;
console.log(friends);
