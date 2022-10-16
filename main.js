function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play()
}

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play()
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = function () {
        tocaSom("#som_tecla_psh")
    };
    contador++;
    console.log(contador);
}
