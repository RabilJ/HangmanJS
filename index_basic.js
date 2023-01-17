// Here it will retrieve the current date

// var date = Date()

// Here it will print greeting and the current date

// console.log("Hello world. Today is: " + date) 

// Var ma zasięg globalny. Skrót do komentarzy CTRL K CTRL C, usuniecie CTRL K CTRL U
// Mozna deklarowac wielokrotnie w jednym bloku
// var i = 0;
// var i = 2;
// console.log(i);

// Zmiennej let k nie mozemy zadeklarowac wielokrotnie w jednym bloku - {}, const jest wartością stałą - raz zadeklarowaną nie można zmienić
// zmienną można też zadeklarować bez slowa kluczowego var, let, const, ale jest to zle widziane.
// const k = [5,1,2,3,4];


// {
//     let k = 5;
//     console.log(k);
// }
// console.log(k);

// Operatory arytmetyczne

// let nbr = 5;
// console.log(nbr+5);
// console.log(nbr-5);
// console.log(nbr*5);
// console.log(nbr/5);
// Modulo
// console.log(nbr%5);
// Potęgowanie
// console.log(nbr**5);

// Operatory przypisania
// nbr = 10;
// nbr+=1; // nbr = nbr + 1
// nbr*=2;
// nbr++;
// nbr--;
// console.log(nbr);

// Operatory porównania
// nbr = 10;

// console.log(nbr == 10); //Porównanie wartości
// console.log(nbr === "10"); //Porównanie typu ===
// console.log(nbr > 20);
// console.log(nbr <= 10);

// Operatory logiczne
// let nbr2 = 20;

// console.log(nbr > 5 && nbr2 > 30); //Pierwsze wyrażenie I drugie jest prawdziwe
// console.log(nbr > 5 || nbr2 > 30); //Pierwsze wyrażenie LUB drugie jest prawdziwe
// console.log(!(nbr < 5)); //Wyrażenie jest nieprawdziwe - NEGACJA


//TYPY PROSTE
// let nbr = 20;
// let text = "very interesting text";
// let thisCourseIsFantastic = true;
// let nothing = null;
// let x;
// console.log(null + true + "10");

// let a = 3;
// let b = 4;
// console.log(a)
// console.log(b)

// a = b + a;
// b = a - b;
// a = a - b;

// console.log(a)
// console.log(b)

//OBIEKTY
// let car = {
//     color: "red",
//     maxSpeed: 350
// };

// let newCar = car;

// newCar.color = "blue";

// newCar.maxSpeed = 100;

// console.log(car);
// console.log(newCar);

// let text = "Ala ma kota";
// console.log(text.toUpperCase())

// console.log(text);

//TABELE
// let tab = [2,4,7,4,8,11,9,10,5];
// console.log(tab);
// tab.push(10); - Wrzuca nowy element na koniec tablicy
// tab[0] = 69; - Ustawia element o podanej pozycji na okreslona wartosc.
// console.log(tab);

// let lastElement = tab.pop(); - ostatni element z listy
// console.log(lastElement);

// console.log(tab.sort()); - Wyswietla liste posortowana leksykonalnie

// function compare(a, b){ - Funkcja do sortowania liczb
//     if (a < b){
//         return -1
//     }
//     if (a > b){
//         return 1
//     }
//     return 0
// }

// console.log(tab.sort(compare));

//FUNKCJE

// function addTwoNumbers(firstNumber, secondNumber){
//     return firstNumber + secondNumber;
// }
// console.log(addTwoNumbers(2,3));

// function log(specialText){
//     console.log(Date() + ": " + specialText)
// }

// log();
// log("I jest wanna say...");

// KOMENTOWANIE CTRL + K + C
// ODKOMENTOWANIE CTRL + K + U
//INSTRUKCJE WARUNKOWE

// let k = 10;

// if (k  > 0 && k > 10){
// console.log("Number is positive and bigger than 10");
// }
// else if (k < 0) {
//     console.log("Number is negative");
// }
// else if (k > 0 && k < 10){
//     console.log("Number is positive and smaller than 10")
// } else {
//     console.log ("Number is 10");
// }

//Zagnieżdżanie warunków w zmiennej - zmienna = warunek ? <co gdy true> : <co gdy false> ;
// let result = k > 0 ? "Number is positive" : "Number is negative";
// console.log(result);

// let name = "Marian";

// switch(name){
//     case "Czarek":
//         {
//             console.log("Typed name is Czarek");
//             break;
//         }
//         case "Ania":
//         {
//             console.log("Typed name is Ania");
//             break;
//         }
//         default:
//         {
//             console.log("I don't know this name"); 
//         }
//}
//PĘTLE
// let array = [0,0,0,0,0,0,0,0,0,0]
// for (let index = 0; index < array.length; index++) {
//     array[index] = index+1;
//     console.log(`This is my ${index+1} iteration`);
// }
// console.log(array);


//MASZYNA LOSUJĄCA
// let numberOfIterations = 0;

// function getRandomInt(min, max){
//     min = Math.ceil(min);
//     max = Math.ceil(max);
//     return Math.floor(Math.random() * (max - min) + min);
// }

// while(numberOfIterations < 1000){
//     var numberFromThisLottery = getRandomInt(0,100);

//     if (numberFromThisLottery > 95) {
//         break;
//     }
//     numberOfIterations++;
// }

// console.log(`Nasza wylosowana liczba to ${numberFromThisLottery}, wykonaliśmy ${numberOfIterations} iteracji`)

// POMINIĘCIE konkretnej iteracji
// for (let i = 0; i < 10; i++) {
//     if(i < 4){
//         continue;
//     }
//     console.log(i);
// }
// ZATRZYMANIE na konkretnej iteracji
// for (let i = 0; i < 10; i++) {
//     if(i > 4){
//         break;
//     }
//     console.log(i);
// }
//UŻYCIE NODE.JS I READLINE-SYNC
//instalujemy za pomoca komendy npm i lub install readline-sync
// var readlineSync = require('readline-sync');
 
// // Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
 
// // Handle the secret text (e.g. password).
// var favFood = readlineSync.question('What is your favorite food? ', {
//   hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');

// PRACA DOMOWA
// Napisanie gry wisielec, gracz ma ograniczoną liczbę prób.
// Na początku zna długość słowa
// W kazdej probie moze podac jedna litere
// Jezeli znajduje sie w slowie - kazde jej wystapienie jest ujawniane na odpowiednim miejscu
// Jezeli nie znajduje sie otrzymuje informacje, ze nie ma takiej litery w slowie
// Gra konczy sie gdy slowo jest odgadniete lub skonczyly sie proby

// Uzycie  
// zmiennych, tablic
// petli
// funkcji
// biblioteki zewnetrznej
// zaloz stala kolekcje slow do odgadniecia ktora bedzie losowac slowa

// Dla chetnych, po kazdej probie pokazuje sie rysunek zlozony ze znakow ASCII
// Jak w prawdziwej grze
