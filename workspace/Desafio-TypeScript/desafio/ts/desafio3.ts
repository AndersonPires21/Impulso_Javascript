
let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo')! as HTMLButtonElement;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = '0'

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
      let saldo = Number(campoSaldo.innerHTML) + soma
        campoSaldo.innerHTML = saldo.toString();
    }
}

function limparSaldo() {
    if (campoSaldo) {
        campoSaldo.innerHTML = '0'
    }
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(verificarTipo(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

function verificarTipo (valor : string ) {
    // typeof valor === "string" ? return Number(valor) : return valor
    if (typeof valor === "string") {
        return Number(valor)
    } else return valor

}
