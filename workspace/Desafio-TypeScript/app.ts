let button = document.getElementById("button") as HTMLButtonElement
let input1 = document.getElementById("input1") as HTMLInputElement
let input2 = document.getElementById("input2") as HTMLInputElement

function somarComTs (numero1 : number, numero2 : number) {
    return numero1 + numero2
}

button?.addEventListener("click", () => {
    let resultado = somarComTs(Number(input1.value), Number(input2.value))
    console.log(resultado)
})
