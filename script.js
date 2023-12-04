const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');
const input3 = document.querySelector('.form-control');
const formP = document.querySelector('.form-p');
const bloque = document.querySelector('.bloque');

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event){
//     // console.log({event});
//     event.preventDefault(); // Esto hace que no se ejecute por defecto que es recargar la página

//     const sumaInputs = parseFloat(input1.value) + parseFloat(input2.value);

//     if(!isNaN(sumaInputs)){
//         pResult.innerText = "Resultado: " + sumaInputs;
//     } else {
//         pResult.innerText = "Ingrese sólo números";
//     }
// }

btn.addEventListener('click', sumarInputValues);

btn.addEventListener('mouseenter', () => {
    btn.style.backgroundColor = 'gray';
});

btn.addEventListener('mouseleave', () => {
    btn.style.backgroundColor = 'lightgray';    
});

function sumarInputValues(){
    // console.log({event});
    // event.preventDefault(); // Esto hace que no se ejecute por defecto que es recargar la página

    const sumaInputs = parseFloat(input1.value) + parseFloat(input2.value);

    if(!isNaN(sumaInputs)){
        pResult.innerText = "Resultado: " + sumaInputs;
    } else {
        pResult.innerText = "Ingrese sólo números";
    }
}

// Programación del Contador

const parrafo = document.querySelector('#parrafo-contador');
const boton = document.querySelector('#boton-contador');

let sumaContador = 0;

boton.addEventListener('click', () => { // Vamos a usar una función anónima con función flecha
    //console.log('click');
    sumaContador++;
    parrafo.textContent = sumaContador;
}); 

input3.addEventListener('change', (e) => {
    formP.textContent = e.target.value;
});

bloque.addEventListener('mouseenter', () => {
    bloque.style.backgroundColor = 'red'; 
});

bloque.addEventListener('mouseleave', () => {
    bloque.style.backgroundColor = 'blue';
});
