const images = [
    './images/background-images/S__58540035_0.jpg',
    './images/background-images/S__58540037_0.jpg',
    './images/background-images/S__58540042_0.jpg',
    './images/background-images/S__58540050_0.jpg'
];

let index = 0;
const bg = document.getElementById("header-slide");

function changeBackground() {
    bg.style.backgroundImage = `url(${images[index]})`;
    index++;
    if (index === images.length) {
        index = 0;
    }
}

changeBackground();

setInterval(changeBackground, 3000);