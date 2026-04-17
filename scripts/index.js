
const apiUrl = 'https://lanciweb.github.io/demo/api/pictures/';

/* let esempio = {id: 1, title: 'Skate Park', date: '01-07-2024',
     url: 'https://marcolanci.it/boolean/assets/pictures/1.png'} */

fetch(apiUrl)
    .then(response => {
        return response.json(); //è un array di oggetti
    }).then(album => {
        album.forEach(foto => { //questa sarà la mia funzione di caricamento poi
            console.log(foto);
        });
    }).catch(error => {
        console.error('errore');
    })
