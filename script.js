const tempBase = 26;

const h3 = document.querySelector('h3');
let perg = document.querySelector('.pergunta');
perg.classList.add('active');
const form = document.querySelector('form');

form.onsubmit = (event) => {
    event.preventDefault();
    const temp = Number(document.querySelector('#temp').value);

    // Com operador ternário:
    let escreverTemp = temp === tempBase ? h3.innerText = 'Ameno': temp > tempBase ? h3.innerText = 'Quente' : h3.innerText = 'Frio';
    h3.style.display = 'block';
};

// Com if e else:
// if (temp === tempBase) {
//     span.innerText = 'Ameno';
// }
// else if (temp > tempBase){
//     span.innerText = 'Quente';
// }
// else {
//     span.innerText = 'Frio';
// };