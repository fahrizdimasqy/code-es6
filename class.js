class Car {
    // constructor
    constructor(manufacture, color, type) {
        this.manufacture = manufacture;
        this.color = color;
        this._type = type;
        this.enginesActive = false;
    }

    get type() {
        return `Type mobil: ${this._type}`;
    }

    set type(value) {
        console.log(`Typpe mobil diubah dari ${this._type} menjadi ${value}`);
        this._type = value;
    }
    info() {
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Color: ${this.color}`);
        console.log(`Type: ${this.type}`);
        console.log(`Engines: ${this.manufacture ? "Active" : "Inactive"}`);
    }
}

const fahrizCar = new Car("BMW", "Blue and white", "Atomatic")
console.log(fahrizCar.manufacture);
console.log(fahrizCar.color);
console.log(fahrizCar.type);
fahrizCar.type = "Manual"
console.log(fahrizCar.type);
fahrizCar.info();


// property accessor
// fahrizCar.color = "Black"
// console.log(fahrizCar.color);