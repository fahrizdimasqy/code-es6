// const executorFunction = (resolve, reject) => {
//     const isCoffeeMakerReady = true;
//     if (isCoffeeMakerReady) {
//         resolve('kopi berhasl dibuat');
//     } else {
//         reject('mesin kopi rusak');
//     }
// }

// const handlerSuccess = (resolvedValue) => {
//     console.log(resolvedValue);
// }

// const handlerRejected = (rejectionReason) => {
//     console.log(rejectionReason);
// }
// const makeCoffe = new Promise(executorFunction);
// makeCoffe
//     .then(handlerSuccess)
//     .catch(rejectionReason)


// chining promise

const state = {
    isCoffeeMakerReady: true,
    seedStocks: {
        robusta: 15,
        arabica: 10,
        liberica: 20
    }
}

const getSeeds = (type, miligrams) => {
    return new Promise((resolve, reject) => {
        if (state.seedStocks[type] >= miligrams) {
            state.seedStocks[type] -= miligrams;
            resolve('biji kopi didapatkan');
        } else {
            reject('stock habis');
        }
    });
}

const makeCoffee = (seeds) => {
    return new Promise((resolve, reject) => {
        if (state.isCoffeeMakerReady) {
            resolve('kopi berhasil dibuat');
        } else {
            reject('mesin tidak dapat digunakan');
        }
    });
}

const servingToTable = coffee => {
    return new Promise(resolve => {
        resolve('Pesanan kopi sudah selesai');
    });
}

const rejectionReason = (resolvedValue) => {
    console.log(resolvedValue);
}

function reverseACoffee(type, miligrams) {
    // body...
    getSeeds(type, miligrams)
        .then(makeCoffee)
        .then(servingToTable)
        .then(resolvedValue => {
            console.log(resolvedValue);
        })
        .catch(rejectedReason => {
            console.log(rejectedReason);
        })
}

reverseACoffee("liberica", 4);


// promise all
const arabicaOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('kopi arabica selesai');
        }, 4000);
    })
}
const robustaOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('kopi robusta selesai');
        }, 2000);
    })
}

const libericaOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('kopi liberica selesai');
        }, 3000);
    })
}

const promises = [arabicaOrder(), robustaOrder(), libericaOrder()];

Promise.all(promises)
    .then(resolvedValue => {
        console.log(resolvedValue);
    })