let nomedoPaciente = "Marcos",
alturaPaciente = 1.95,
pesoPaciente = 140,
resultado = pesoPaciente / (alturaPaciente*alturaPaciente);

// console.log("O paciente " + nomedoPaciente + " possui um IMC de: " + resultado.toFixed(1))

if(resultado < 18.5){
    console.log("O paciente " + nomedoPaciente + " possui um IMC de: " + resultado.toFixed(1) + " e esta com baixo peso ")
} else if (resultado >= 18.5 && resultado <= 24.9){
    console.log("O paciente " + nomedoPaciente + " possui um IMC de: " + resultado.toFixed(1) + " e esta com o peso normal ")
}else{
    console.log("O paciente " + nomedoPaciente + " possui um IMC de: " + resultado.toFixed(1) + " e esta com sobre peso ")
}