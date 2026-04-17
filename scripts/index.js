
const apiUrl = 'https://lanciweb.github.io/demo/api/pictures/';

const fotoWrapperEl = document.querySelector('.foto-wrapper');
const cardWrapperEl = document.querySelector('.card-wrapper');

/* let esempio = {id: 1, title: 'Skate Park', date: '01-07-2024',
     url: 'https://marcolanci.it/boolean/assets/pictures/1.png'} */

fetch(apiUrl)
    .then(response => {
        return response.json(); //è un array di oggetti
    }).then(album => {
        album.forEach(foto => { //questa sarà la mia funzione di caricamento poi
            console.log(foto);
            
            cardWrapperEl.innerHTML += `
                                        <div class="my-card col-12 col-md-6 col-lg-4">
                                            <div class="pin-wrapper">
                                                <img class="pin" src="img/pin.svg" alt="pin">
                                            </div>
                                            <div class="foto-wrapper">
                                                <img class="img-fluid" src="${foto.url}" alt="">
                                            </div>
                                            <div class="stats-wrapper">
                                                <p class="foto-data font-date">${foto.date}</p>
                                                <p class="foto-title font-titles">${foto.title}</p>
                                            </div>
                                        </div>
            `
        });
    }).catch(error => {
        console.error('errore');
    })
