const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");

btn.addEventListener('click', () =>{
    if(Number(num1.value) > Number(num2.value)){
        resultado.innerText = `O Primeiro numero é maior que o segundo.`
    }
    else if(Number(num1.value) < Number(num2.value)){
        resultado.innerText = `O segundo numero é maior`
    }
    else{
        resultado.innerText = `Os numeros são iguais`
    }
});