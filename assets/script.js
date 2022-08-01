
const $ = (querySelector) => document.querySelector(querySelector);

const  resultado = document.getElementById('#result')




function Soma() {
    const valor1 = Number($("#number1")?.value);
    const valor2 = Number($("#number2")?.value);
    let result = valor1 + valor2;
    return createelement(result);
   

}


function diminuir() {
    const valor1 = Number($("#number1")?.value);
    const valor2 = Number($("#number2")?.value);
    let result = valor1 - valor2;
    return  createelement(result);
}


function multiplicar() {
    const valor1 = Number($("#number1")?.value);
    const valor2 = Number($("#number2")?.value);
    let result = valor1 * valor2;
    return createelement(result);
}

function dividir() {
    const valor1 = Number($("#number1")?.value);
    const valor2 = Number($("#number2")?.value);
    let result = valor1 / valor2;
    return createelement(result);
    
}


function createelement (props){
 if (props){
    let result =document.createElement("h1")
    result.id='result';
    let texto = document.createTextNode('Resultado é :')
  let element=document.createElement("div");
  element.id='numeros';
  let body =document.body
  let resulta =document.createTextNode(props)
  result.appendChild(texto);
  body.appendChild(result)
  element.appendChild(resulta) 
  body.appendChild(element)

 }

}

function remover (){  
    let number = document.querySelector('#numeros');
 number.parentNode.removeChild(number)
 let deleteResult =document.querySelector("#result");
 deleteResult.parentNode.removeChild(deleteResult);

}

