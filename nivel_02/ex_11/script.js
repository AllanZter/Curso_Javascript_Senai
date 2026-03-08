const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");

btn.addEventListener('click', () =>{
    const media = Number(nota1.value + nota2.value) / 2;

    if(media >= 7){
        resultado.innerText = `Sua media foi: ${media}, Aprovado`
    }else{
        resultado.innerText = `Sua media foi: ${media}, Reprovado`
    }
});