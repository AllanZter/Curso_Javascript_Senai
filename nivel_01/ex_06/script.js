const conta = document.getElementById("conta");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");

btn.addEventListener('click', () =>{
    const gorjeta = Number(conta.value * 10) / 100;
    console.log(gorjeta);
    resultado.innerText = `O Valor da Gorjeta do Garçom é: R$${gorjeta}.`
});