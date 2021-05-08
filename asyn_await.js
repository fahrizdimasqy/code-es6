// const getCoffee = () => {
//     return new Promise((resolve, reject) => {
//         const seeds = 100;
//         setTimeout(() => {
//             if (seeds >= 10) {
//                 resolve("Coffee didapatkan!");
//             } else {
//                 reject("Biji kopi habis!")
//             }
//         }, 1000)
//     })
// }

// async function makeCoffee() {
//     const coffee = await getCoffee();
//     console.log(coffee);
// }
// makeCoffee()


// chainng asycn awaitconst 
state = {
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

async function reverseACoffee(type, miligrams) {
    // body...
    try {
        const seeds = await getSeeds(type, miligrams)

        const coffee = await makeCoffee(seeds)
        const result = await servingToTable(coffee)

        console.log(result);

    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
reverseACoffee("liberica", 4);