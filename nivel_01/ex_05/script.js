const metros = document.getElementById("valor-metros");
const btn = document.getElementById("btn");
const result =  document.getElementById("result");

btn.addEventListener('click',() =>{
    const converter = Number(metros.value) * 100;
    console.log(converter);
    result.innerText = `A medida em metros convertida equivale a ${converter} cm`;
})
