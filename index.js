const mobileicon = document.getElementById("mobile-diplay");
const nav = document.querySelector(".nav-links");

mobileicon.addEventListener('click', function() {
    nav.classList.toggle('links_active')
})

const imageSlide = [
    'images/le-quan-V5qhgJN6do0-unsplash (3).jpg',
    'images/cord-allman-qMK2NZXIhP0-unsplash.jpg',
    'images/about.jpg'
];

const nextImg = document.getElementById("next");
const prevtImg = document.getElementById("prev");
let currentImg = 0;

nextImg.addEventListener('click', function() {
    currentImg++;

    if(currentImg > 1) {
        currentImg = 0;
    }

    document.getElementById('slideimg').src = imageSlide[currentImg];
    
});

prevtImg.addEventListener('click', function() {
    currentImg--;

    if(currentImg < 0) {
        currentImg = 1;
    }

    document.getElementById('slideimg').src = imageSlide[currentImg];
    
});