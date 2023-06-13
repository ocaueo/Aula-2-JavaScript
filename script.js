const TEMPERATURA_BASE = 26;

const temp = prompt('Qual a Temperatura hoje');

let span = document.querySelector('.tempo');

if(temp <= 25 ) {
    span.innerText = 'Frio'
    span.style.color = 'darkblue'
} else if(temp >= 26 && temp <= 37) {
    span.innerText = 'Quente'
    span.style.color = 'red'
} else {
    span.innerText = 'inferno'
    span.style.color = 'darkred'
}
