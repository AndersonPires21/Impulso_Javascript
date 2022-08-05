"use strict";
let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
function somarComTs(numero1, numero2) {
    return numero1 + numero2;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    let resultado = somarComTs(Number(input1.value), Number(input2.value));
    console.log(resultado);
});
