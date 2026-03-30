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

const locationFilter = document.querySelector('#filter-location');

locationFilter?.addEventListener('change', () => {
    
    const jobListingCards = document.querySelectorAll('.job-listing-card');
    
    jobListingCards.forEach(jobCard => {
        
        const textSmall = jobCard.querySelector('small').textContent.toUpperCase();

        if(!textSmall.includes(locationFilter.value.toUpperCase())){
            jobCard.style.display = 'none';
        }else{
            jobCard.style.display = 'flex';

        }
    })
})

const technologyFilter = document.querySelector('#filter-technology');

technologyFilter?.addEventListener('change', () => {
    
    const jobListingCards = document.querySelectorAll('.job-listing-card');
    
    jobListingCards.forEach(jobCard => {
        
        const textSmall = jobCard.querySelector('p').textContent.toUpperCase();

        if(!textSmall.includes(technologyFilter.value.toUpperCase())){
            // jobCard.style.display = 'none';
            jobCard.classList.add('is-hidden');
        }else{
            // jobCard.style.display = 'flex';
            jobCard.classList.remove('is-hidden')

        }
    })
})


// LLAMADA A LOS DATOS DE EMPLEOS
// esto se ejecuta de forma asincrónica
// esto es una promesa
fetch("./data.json")
    .then( (response) =>{
        return response.json()
    })
    .then((jobs) => {
        console.log(jobs)
    })