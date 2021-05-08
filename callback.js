const getCake = (callback) => {
    let cake = null;
    console.log('Silahkan tunggu');
    setTimeout(() => {
        cake = "selesai"
        callback(cake);
    }, 5000);

}
const cake = getCake();
console.log(cake);