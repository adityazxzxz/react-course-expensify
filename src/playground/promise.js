const promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve({
    //         name:'Aditya',
    //         age:27
    //     });
    // },5500);
    reject('Ada yang error');
})


console.log('before');
promise.then((data) => {
    console.log(data);
},(error) => {
    console.log('error :',error)
})
console.log('after');