const pegatina = document.querySelector('.pegatina');
const pico = document.querySelector('.pico1');
const carta = document.querySelector('.carta');
const hoja = document.querySelector('.hoja');
let unicaVez = false;

carta.addEventListener('click', async function() {
    if(pegatina.classList.contains('quitar')&&unicaVez){
        unicaVez =false;
        await timming(2000);
        pico.classList.toggle('levantado');  // Alterna el estado de levantado
        document.querySelector('.borde1').classList.toggle('levantado');
        hoja.classList.add('mostrar');
        await timming(1000);
        await timming(1000);
        carta.classList.toggle('bajar');
    }
});
document.querySelector('.pegatina').addEventListener('click', async function () {
    this.classList.add('quitar');
    carta.style.cursor = "pointer";
    unicaVez = true;
});

function timming(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
