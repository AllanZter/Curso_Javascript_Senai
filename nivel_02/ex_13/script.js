function calcularIMC(){
    const peso = document.getElementById("peso");
    const altura = document.getElementById("altura");
    const resultado = document.getElementById("resultado"); 

    const IMC = (Number(peso.value) / Number(altura.value)) * 2;

    
    if(IMC > 25){
        resultado.innerText = `Seu IMC é ${IMC}, você está acima do peso`
    }
    else{
        resultado.innerText = `Seu IMC é ${IMC}, você está com peso normal`
    }
    

    
}