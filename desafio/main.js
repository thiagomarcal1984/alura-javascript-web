const tel = document.querySelector('input[type=tel]');

const listaDeTeclas = document.querySelectorAll('input[type=button]');
console.log(listaDeTeclas);

for (i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    tecla.onclick = function() {
        tel.value += tecla.value;
    }
}
