const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");
const botao = document.querySelector("#botao5")

const calcularIMC = () => {
    let imc = peso.value / (altura.value * altura.value);
    console.log(imc)
    alert('Sua categoria no IMC ' + Number(imc).toFixed(1));
}

botao.addEventListener('click', calcularIMC);
// const altura = document.getElementById("#altura");
// const peso = document.getElementById("#peso");
// const botao5 = document.getElementById("#botao5");
// const resultado = document.getElementById("#resultado");

// function calcularIMC() {

//     if (altura.value % 1 != 0 && !isNaN(altura.value % 1)) {
//         const imc = peso.value / (Math.pow(altura.value , 2));
//         resultado.innerHTML = imc.toFixed(2);
//         altura.value = '';
//         peso.value = '';
//     } else {
//         let arrayAltura = altura.value.split("");
//         arrayAltura.splice(1, 0, ".");
//         let alturaFormatada = arrayAltura.reduce((ar, valor) => ar + valor);
//         const imc = peso.value / (Math.pow(alturaFormatada, 2));
//         resultado.innerHTML = imc.toFixed(2);
//         altura.value = '';
//         peso.value = '';
//     }
// }

// const altura = document.querySelector("#altura");
// const peso = document.querySelector("#peso");
// const botao = document.querySelector("#botao5")

// const calcularIMC = () => {
//     const imc = altura.value / (peso.value * peso.value);
//     console.log(imc)
//     alert('Sua categoria no IMC ' + Number(imc).toFixed(1));
// }

// botao.addEventListener('click', calcularIMC);
