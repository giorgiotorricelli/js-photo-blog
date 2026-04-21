
const apiUrl = 'https://lanciweb.github.io/demo/api/pictures/';

const fotoWrapperEl = document.querySelector('.foto-wrapper');
const cardWrapperEl = document.querySelector('.card-wrapper');
const overlayImgEl = document.querySelector('.overlay-img');
const overlayContainer = document.querySelector('.overlay-container');
const chiudiBtn = document.querySelector('.chiudi-btn');
const body = document.querySelector('.body');
const backBtn = document.querySelector('.back-btn');
const nextBtn = document.querySelector('.next-btn');

/* let esempio = {id: 1, title: 'Skate Park', date: '01-07-2024',
     url: 'https://marcolanci.it/boolean/assets/pictures/1.png'} */

let albumSaved = [];



fetch(apiUrl)
    .then(response => {
        return response.json(); //è un array di oggetti
    }).then(album => {
        album.forEach(foto => { //questa sarà la mia funzione di caricamento poi
            albumSaved.push(foto)


            cardWrapperEl.innerHTML += `
                                        <div class="my-card col-12 col-md-6 col-lg-4" data-pic="${foto.url}" data-id="${foto.id}">
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
        return album;
    }).catch(error => {
        console.error('errore');
    }).then(el => {
        console.log(albumSaved);
    })


let currentId = 0;

function clickOnCard(event) {

    const target = event.target;
    const overlayImage = target.closest('.my-card').dataset.pic;
    const targetId = target.closest('.my-card').dataset.id;
    console.log(targetId);



    overlayContainer.classList.remove('d-none');


    if (target.closest('.my-card') !== null) {
        overlayImgEl.src = `${overlayImage}`;
        body.classList.add('overflow-hidden');
        currentId = Number(targetId) - 1;
        return targetId;
    }

}

function dnoneOverlay() {
    overlayContainer.classList.add('d-none');
    body.classList.remove('overflow-hidden');
}

function nextPic() {
    currentId += 1;

    if (albumSaved[currentId] !== undefined){
        
        overlayImgEl.src = `${albumSaved[currentId].url}`;
        console.log(albumSaved[currentId].id);
        
    } else {
        currentId = 0;
        overlayImgEl.src = `${albumSaved[currentId].url}`;
        console.log(albumSaved[currentId].id);
    }
    
}

function previousPic() {
    currentId -= 1;

    if (albumSaved[currentId] !== undefined){
        
        overlayImgEl.src = `${albumSaved[currentId].url}`;
        console.log(albumSaved[currentId].id);
        
    } else {
        currentId = albumSaved.length - 1;
        overlayImgEl.src = `${albumSaved[currentId].url}`;
        console.log(albumSaved[currentId].id);
    }
    
}

cardWrapperEl.addEventListener(
    'click', clickOnCard
)

chiudiBtn.addEventListener(
    'click', dnoneOverlay
)

nextBtn.addEventListener(
    'click', nextPic
)

backBtn.addEventListener(
    'click', previousPic
)
