const base = document.getElementById("base");
const altura = document.getElementById("altura");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");

btn.addEventListener('click', () =>{
    const area = Number(base.value) * Number(altura.value);
    resultado.innerText = `A área do retângulo é: ${area} metros`
});