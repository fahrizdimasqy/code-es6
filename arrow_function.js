//function deklarasi
function sayHello(greet) {
    console.log(`${greet}`);
}

//expression function
const sayName = (name) => console.log(`${name}`);
sayName("Dimas");

//menyimpan kedalam variabel
const myName = (name) => console.log(`${name}`);

//pased as an argument
["dimas", "fahriz", "kirigaya"].forEach((name) =>
    console.log(`nama saya adalah ${name}`)
);
const favorites = ["games", "coding", "tidur"];
console.log(...favorites);

const ucapan = (language) => {
    if (language.toUpperCase() === "INDONESIA") {
        return "Selamat pagi";
    } else {
        return "good morning";
    }
};
console.log(ucapan("Indonesia"));




// keyword this

function People(name, age) {
    // body...
    this.name = name;
    this.age = age;
}

const programmer = new People("John", 18);
console.log(programmer.name);
console.log(programmer.age);


// menambahkan introMySelf ke people
People.prototype.introMySelf = function() {
    setTimeout(function() {
        console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`)
        console.log(`Hobby saya adalah ${this.hobby}`)
    }, 300);
}
const developer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
developer.introMySelf();

// arrow function
People.prototype.myName = function() {
    // body...
    setTimeout(() => {
        console.log(`Hello! Nama saya ${this.name}`)
    }, 300);
}
const fahriz = new People("fahriz");
fahriz.myName();

// default parameter
function sayHello2(name = "fahriz", greet = "hello") {
    // body...
    console.console.log(`${greet}${name}`);
    sayHello2.name("dimas", "hai")
    sayHello2();
}

const sayHello = (name = "Stranger", greet = "Hello") => console.log(`${greet} ${name}!`);