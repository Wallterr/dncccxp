const day = document.getElementById('day')
const hour = document.getElementById('hour')
const min = document.getElementById('min')
const sec = document.getElementById('sec')

const lancamento = "30 jul 2023"

function countDown(){
       const dataLanc = new Date(lancamento)
       const hoje = new Date()

       const segTotal = (dataLanc - hoje)/1000;

       const finalDias = Math.floor(segTotal / 60 / 60 / 24);
       const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
       const finalMinutos = Math.floor(segTotal / 60) % 60;
       const finalSegundos = Math.floor(segTotal) % 60;

       day.innerHTML = finalDias
       hour.innerHTML = formatoTempo(finalHoras)
       min.innerHTML = formatoTempo(finalMinutos)
       sec.innerHTML = formatoTempo(finalSegundos)

}

function formatoTempo( tempo ){
    return tempo <10? `0${tempo}`: tempo;
}

countDown();
setInterval(countDown, 1000);