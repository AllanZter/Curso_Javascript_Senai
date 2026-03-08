const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const nota4 = document.getElementById("nota4");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener('click', () =>{
    const media = (nota1.value + nota2.value + nota3.value + nota4.value) / 4;
    result.innerText = `Sua Media é: ${media}`
})

