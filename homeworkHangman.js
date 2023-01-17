var readlineSync = require('readline-sync');

let wordsCollection = ["Zanzibar","Kompot","Jagoda","Wulkan","Drzewo","Lampa","Ekler","Procesor","Mielizna","Szczyt","Klepisko"];
const handicap = 5;
let randomWord = getRandomWord(0,wordsCollection.length,wordsCollection);
let randomWordArray = changeStringToArray(randomWord);
let randomWordCharArray = changeStringToChars(randomWord,"-");
let maxIteration = randomWord.length+handicap;
let arrayOfMissedLetters = [];

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
function compareWords(array1, array2){
    if(array1.toString().replace(/,/g,'')!==array2.toString().replace(/,/g,'')){
        return false
    }
        return true;
}
function changeArrayToWord(array){
        return array.toString().replace(/,/g,'')
}


// console.log(randomWord);


console.log(`Hasło do odgadnięcia ma ${randomWord.length} liter!`)
while(maxIteration >= 0){
    if(maxIteration===0){
        console.log("Skończyły Ci się szanse. Spróbuj ponownie!")
        break;
    }
    if (arrayOfMissedLetters.length>0){
        console.log(`Wykorzystane litery: ${arrayOfMissedLetters.toString()}`)
    }
console.log(`\nMasz ${maxIteration} szans na odgadnięcie hasła!\n`+ changeArrayToWord(randomWordCharArray))
var letterInput = readlineSync.question("Wpisz litere: ");
for (let index = 0; index < randomWord.length; index++) {
    if(letterInput.toLowerCase()===randomWordArray[index].toLowerCase()){
        randomWordCharArray[index] = randomWordArray[index];
    }
}
    if(compareWords(randomWordArray, randomWordCharArray)===true){
        console.log(`GRATULACJE ZGADŁEŚ HASŁO - ${changeArrayToWord(randomWordCharArray)}!`)
        break;
        }
    maxIteration--;
}


// let word = "S,ł,o,w,o";

// console.log(word.replace(/,/g,''));
// console.log(changeStringToChars(word,"-"));