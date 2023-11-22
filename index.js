"use strict";
//1udz
function hello(){
    return "Sveiki!";
}
let pasisveikinimas = hello();
console.log(pasisveikinimas);

function greeting(pasisveikinimas, vardas){
    console.log(pasisveikinimas, vardas,"!")
}
greeting( pasisveikinimas, "Monika");
greeting(pasisveikinimas, "Keite");

//2 uzd
function isBigger(number1, number2){
    if (number1 > number2){
        console.log(`Pirmas skaicius yra didesnis`);
    } else if (number2 > number1) {
        console.log(`Antras skaicius yra didesnis`);
    } else{
        return number1 + number2;
    }
}
let antrosUzdAts = isBigger(9,9);
console.log(antrosUzdAts);
//3 uzd
function fizzAndBuzz(string){
    if (string === "fizz"){
        console.log("bazz");
    } else if (string === "bazz"){
        console.log("fizz");
    } else {
        console.log("Please provide fizz or bazz");
    }
}
fizzAndBuzz("bazz".toLowerCase());

//4 uzd
function arTrikampisLygiakrastis(krastineA, krastineB, krastineC){
    if (krastineA === krastineB && krastineA === krastineC && krastineB === krastineC){
        console.log('Gali buti sudarytas lygiakrastis trikampis');
    } else {
        console.log('Blogai ivesti duomenys, trikampis nera lygiakrastis');
    }
}
arTrikampisLygiakrastis(18,18,antrosUzdAts);

//5uzd
// function kvadratoPlotas(){
//     let krastine = prompt('Ivesti krastine ilgi: ');
//     return krastine*krastine;
// }
// alert(kvadratoPlotas());


//6
function isSeven(x){return x=="7"? true : false ;}

let arSeptyni = isSeven(7);
console.log(arSeptyni);

//7
function isEqual(skaicius1, skaicius2){
    if (skaicius1 === skaicius2){
        return true
    } else {
        return false
    }
}
let arLygus = isEqual(9,true);
console.log(arLygus);

//8 
function prize(prob,prize,pay){
    let daugyba = prob*prize;
    if (daugyba > pay){
        return true
    } else {
        return false
    }
}
let prizas = prize(20,10,1550);
console.log(prizas);

//9
function time(minutes){
    let sekunde = minutes*60;
    console.log(`${minutes}min = ${sekunde}sec`)
}
time(33);

//10
function skaiciuotuvas(){
    const sk1 = parseInt(prompt('Iveskite pirma skaiciu: '));
    const simbolis = prompt('Iveskite veiksma + , - , / , *');
    const sk2 = parseInt(prompt('Iveskite antra skaiciu: '));
    
    let rezultatas;
    if( simbolis === "+"){
        rezultatas = sk1 + sk2;
        alert(rezultatas);
    } else if (simbolis === "-"){
        rezultatas = sk1 - sk2;
        alert(rezultatas);
    } else if (simbolis === "/"){
        rezultatas =  sk1 / sk2;
        alert(rezultatas);
    } else if (simbolis === "*"){
        rezultatas =  sk1 * sk2;
        alert(rezultatas);
    } else {
        rezultatas = "Veiksmas negalimas"
        alert(rezultatas);
    }  
}
skaiciuotuvas();


