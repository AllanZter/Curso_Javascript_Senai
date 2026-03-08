const idade = document.getElementById("idade");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");

btn.addEventListener('click', () =>{
    if(idade.value >= 18){
        resultado.innerText =`Maior de Idade sua idade é: ${idade.value} anos`;
    }else{
         resultado.innerText =`Menor de Idade é: ${idade.value} anos`;
    }
});