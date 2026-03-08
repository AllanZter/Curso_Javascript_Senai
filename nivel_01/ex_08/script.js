const num = document.getElementById("num");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");


btn.addEventListener('click', () =>{
    const antecessor = Number(num.value) -1;
    const sucessor = Number(num.value) +1 ;
     resultado.innerText = `O Antecessor de ${num.value} é: ${antecessor} e seu Sucessor é: ${sucessor}`
})
