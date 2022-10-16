function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play()
}

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play()
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    // Template String
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    contador++;
}
