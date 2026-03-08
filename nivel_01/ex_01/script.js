//Exercicio 1

const nome = document.getElementById("nome");
const btn = document.getElementById("btn");
const mensagem = document.getElementById("mensagem");

btn.addEventListener('click', () =>{
    mensagem.innerText = `Olá ${nome.value}, seja bem-vindo ao curso de Programação!.`
})

