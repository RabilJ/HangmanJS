// TRY CATCH EXCEPTIONS
// let someText = "kkkkk";
// let properJson = `{"id": 1, "name": "Bob"}`;

// function tryToPrintJson(input){
//     try {
//         var result = JSON.parse(input)
//         console.log(result)
//     }
//     catch(ex){
//         console.error("Input is incorrect. Expected fortmat: JSON")
//     }
// }


//ASYNCHRONICZNOŚĆ - TIMEOUT
// console.log(tryToPrintJson(someText));
// let result = "Not proper data";
// function printWord(fn){
//     setTimeout(() => {
//         fn("Proper data");
//     }, 2000);
// }

// printWord(result => {
//     console.log(result)
// });

// console.log(result);


// function doSomething(){
// return new Promise((resolve, reject) =>{
//     let data = 1;
//     if(data === 0){
//         resolve("Success");
//     }
//     else {
//         reject("Error");
//     }
// });
// }

// doSomething()
// .then(result => {
//     console.log(result);
// }).catch(error =>{
//     console.error(error);
// })

console.log("Zaczynamy");

function doSmth1(){
return new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Do smth 1");
    },1000)
});
}

function doSmth2(){
return new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Do smth 2");
    },2000)
});
}
function doSmth3(){
return new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Do smth 3");
    },3000)
});
}

// Promise.all([doSmth1(), doSmth2(), doSmth3()]).then(result =>{
//     console.log(result);
//     console.log(Date());
// })

// Promise.race([doSmth1(), doSmth2(), doSmth3()]).then(result =>{
//     console.log(result);
//     console.log(Date());
// })

// doSmth()
//     .then(result => {
//         console.log(result);
//     })

    async function doSmthAsync(){
        let resultOne = doSmth1();
        let resultTwo = doSmth2();
        let resultThree = doSmth3();
        return [await resultOne, await resultTwo,  await resultThree]
    }

    doSmthAsync()
        .then(result =>{
            console.log(result);
            console.log(Date());
        })
    