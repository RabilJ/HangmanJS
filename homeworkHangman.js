var readlineSync = require('readline-sync');

let wordsCollection = ["Zanzibar","Kompot","Jagoda","Wulkan","Drzewo","Jablko","Lampa","Ekler","Miedz","Procesor","Wolowina","Mielizna","Szczyt","Klepisko"];

let randomWord = getRandomWord(0,wordsCollection.length,wordsCollection);
let randomWordArray = changeStringToArray(randomWord);
let randomWordCharArray = changeStringToChars(randomWord,"-");
let maxIteration = randomWord.length+5;

function getRandomWord(min, max,array){
    min = Math.ceil(min);
    max = Math.ceil(max);
    return array[Math.floor(Math.random() * (max - min) + min)];
}
function changeStringToArray(word){
    let array = []
    for (let index = 0; index < word.length; index++) {
        array[index] = word.charAt(index);
        
    }
    return array;
}
function changeStringToChars(word,char){
    let charArray = [];
    let array = changeStringToArray(word);
    for (let index = 0; index < array.length; index++) {
        charArray[index] = char;
    }
    return charArray;
}
function compareArrays(array1, array2){
        if(array1[index]!==array2[index]){
            return false
        }
        return true;
}


console.log(randomWord);


console.log(`Hasło do odgadnięcia ma ${randomWord.length} liter!`)
while(maxIteration >= 0){
    if(maxIteration===0){
        console.log("Skończyły Ci się szanse. Spróbuj ponownie!")
        break;
    }
console.log(`\nMasz ${maxIteration} szans na odgadnięcie hasła!\n${randomWordCharArray}`)
var letterInput = readlineSync.question("Wpisz litere: ");
for (let index = 0; index < randomWord.length; index++) {
    if(letterInput===randomWordArray[index]){
        randomWordCharArray[index] = randomWordArray[index];
    }
}
    if(compareArrays(randomWordArray, randomWordCharArray)===true){
        console.log(`GRATULACJE ZGADŁEŚ HASŁO - ${randomWordCharArray}!`)
        break;
        }
    maxIteration--;
}


let word = "Słowo";

console.log(changeStringToArray(word));
console.log(changeStringToChars(word,"-"));