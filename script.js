// const botones = document.querySelectorAll('.button-apply-job');

// const addEvent = (boton) => {
//     boton.addEventListener('click', () =>{
//     boton.textContent = '¡Aplicado!';
//     boton.classList.add('is-applied');
//     boton.disabled = true;
//     });
// }

// botones.forEach(boton => addEvent(boton));

const jobListingList = document.querySelector('.jobs-listings');

jobListingList?.addEventListener('click', (event) => {
    // tomo el elemento que dispara el click
    const boton = event.target;

    // si es el botón, agrego la interacción
    if(boton.classList.contains('button-apply-job')){
        boton.textContent = '¡Aplicado!';
        boton.classList.add('is-applied');
        boton.disabled = true;
    }
})