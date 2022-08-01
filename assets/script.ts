
const $ =(query:string):HTMLInputElement |null => document.querySelector(query);
function Soma () {
const valor1 =  Number($("#number1")?.value);
const valor2 = Number($("#number2")?.value);
return console.log(valor1+valor2)
}