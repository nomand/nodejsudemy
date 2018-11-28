let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number')
                resolve(a+b);
            else
                reject('Arguments must be numbers');
        }, 1500);
    });
}

//// basic
// asyncAdd(2, 2).then((res) => {
//     console.log('Result: ', res);
// }, (error) => {
//     console.log(error)
// });

// chaining
asyncAdd(2, 6).then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 10);
}).then((res) => {
    console.log('Total: ', res);
}).catch((error) => {
    console.log(error);
});

// let somePromise = new Promise((resolve, reject) => {
//     //resolve('Sccess!');
//     reject('It worked!');
// });

// somePromise.then((message) => {
//     console.log('Success!', message);
// }, (error) => {
//     console.log('Error: ', error);
// });