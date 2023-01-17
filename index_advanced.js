let someText = "kkkkk";
let properJson = `{"id": 1, "name": "Bob"}`;

function tryToPrintJson(input){
    try {
        var result = JSON.parse(input)
        console.log(result)
    }
    catch(ex){
        console.error("Input is incorrect. Expected fortmat: JSON")
    }
}



console.log(tryToPrintJson(someText));