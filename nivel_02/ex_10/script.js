const num = document.getElementById("num");
const btn =  document.getElementById("btn");
const resultado = document.getElementById("resultado");

btn.addEventListener('click', () =>{
    const resto = Number(num.value) % 2;

    if(resto === 0){
        resultado.innerText = `O Numero ${num.value} que você digitou é Par`
    }else{
        resultado.innerText = `O Numero ${num.value} que você digitou é Impar`
    }
    
});