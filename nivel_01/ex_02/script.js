const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btn  = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener('click', () =>{
    const soma = Number(num1.value) + Number(num2.value);
    result.innerText = `O seu resultado é ${soma}`;
})