console.log("estoy en JS")

let $resultado = document.getElementById("resul")

function fSumar(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    //console.log(typeof(num1))
    $resultado.innerHTML = "La suma es: "+ (num1+num2)
}
function fRestar(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    $resultado.innerHTML = "La resta es: "+ (num1-num2)
}
function fMultiplicar(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    $resultado.innerHTML = "La multiplicacion es: "+ (num1*num2)
}
function fDividir(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n1.value)
    if(num2===0)
    {$resultado.innerHTML = "La division entre cero (0) No es posible"}
    else{$resultado.innerHTML = "La division es: "+ (num1/num2)}  
}