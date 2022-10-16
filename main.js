function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play()
}

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play()
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`; // Template String

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
}
