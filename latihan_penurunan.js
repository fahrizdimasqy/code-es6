class Vechile {
    constructor(licensePlate, manufacture) {
        this.licensePlate = licensePlate;
        this.manufacture = manufacture;
        this.engineActive = false;
    }
    startEngines() {
        console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan!`);
    }

    info() {
        console.log(`Nomor Kendaraan: ${this.licensePlate}`);
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Mesin: ${this.engineActive ? "Active": "Inactive"}`);
    }

    parking() {
        console.log(`Kendaraan ${this.licensePlate} parkir!`);
    }
}

class Car extends Vechile {
    constructor(licensePlate, manufacture, wheels) {
        super(licensePlate, manufacture);
        this.wheels = wheels;
    }
    droveOff() {
        console.log(`Kendaraan ${this.licensePlate} melaju!`);
    }
    openDoor() {
        console.log(`Membuka pintu!`);
    }
    info() {
        super.info();
        console.log(`Jumlah roda: ${this.wheels}`);
    }

}

const fahrizCar = new Car("H121S", "Honda", 4);
const dimasCar = new Car("H121S", "Suzuki", 4);
fahrizCar.info();
// VerchileFactory.repair([car]);

class VehicleFactory {
    static repair(vehicles) {
        vehicles.forEach(vehicle => {
            console.log(`Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`)
        })
    }
}
// const vehicleFactory = new VehicleFactory();
VehicleFactory.repair([fahrizCar])