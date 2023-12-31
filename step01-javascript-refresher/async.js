// setTimeout(
//     () => {
//         console.log("Timer done");
//     },
//     2000
// )

// console.log("Hello!");
// console.log("Hi");

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log("Timer is done")
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then((text2) => {
            console.log(text2)
        });
}, 2000)

