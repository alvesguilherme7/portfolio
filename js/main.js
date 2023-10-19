function calcularIdade() {

    const dataAtual = new Date();

    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1; 

    const dataNasc = new Date(1996, 9, 21);

    const anoNasc = dataNasc.getFullYear();
    const mesNasc = dataNasc.getMonth() + 1;

    let idade = anoAtual - anoNasc;

    if (mesAtual < mesNasc) {
        idade--;
    }

    document.getElementById("idade").innerText = idade;
}

function init(){
    calcularIdade();
    
}

function mostrarConteudo(){
    let divRenderizando = document.getElementById("renderizando");
    divRenderizando.style.display = "none";
}

init();
