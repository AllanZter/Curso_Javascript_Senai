const ano_nasc = document.getElementById("ano-nasc");
const ano_atual =  document.getElementById("ano-atual");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener('click',() =>{
    const calcular = Number(ano_atual.value) - Number(ano_nasc.value);
    result.innerText = `Sua idade atual é: ${calcular}, anos`;
})