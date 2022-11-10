`use strict`;
//array immagini
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
//function
function up(string) {
    img[active].classList.remove(`d-select`);
 if(string ==`next`){
    if(active == img.length-1){
        active = 0;
        }
    else{
        active++;
        }
    }
    else if (string == `before`){
        if(active == 0){   
            active = img.length-1;
            }
            else{
                active--;
            }
    }
    img[active].classList.add('d-select');
    bigImg.src = images[active].image;
    titleScroll.innerHTML = images[active].title;
    textScroll.innerHTML = images[active].text;
};
//end function

let items = document.querySelector('.items');
let bigImg  = document.querySelector(`.big-img img`)
let active = 0
images.forEach ((object ) => {
const template = document.getElementById(`template`).content.cloneNode(true);
 template.querySelector(`.photo`).src = object.image;
 items.append(template);
} );          

let item = document.querySelector(`.item`);
item.classList.add(`d-select`);
let img = document.querySelectorAll(`.item`);
let titleScroll =  document.getElementById(`title`);
let textScroll =  document.getElementById(`text`);
//Alternativa prima immagine con  js per mantenere Html separato completamente dall'array

//bigImg.src = images[active].image;
//titleScroll.innerHTML = images[active].title;
//textScroll.innerHTML = images[active].text;
document.querySelector('.after').addEventListener("click" , function(){
    up(`next`);
});
document.querySelector('.before').addEventListener("click" , function(){
    up(`before`);
});
//interval function
let play = setInterval( function(){
    up(`next`);
},  3000);
let playBtn = document.getElementById(`play`);
let stopBtn = document.getElementById(`stop`);
stopBtn.addEventListener(`click`, function(){
    clearInterval(play);
});
playBtn.addEventListener(`click`, function(){
    play = setInterval( function(){
        up(`before`);
    },  3000);
});
