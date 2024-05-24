const imagenes = [
    "img/Sett1.jpg",
    "img/Sett2.jpg",
    "img/Sett3.jpg",
    "img/Sett4.jpg",
    "img/Sett5.jpg"
];


let currentIndex = 0;

function showImage(index) {
    const imgElement = document.getElementById('carousel-image');
    imgElement.src = imagenes[index];
}

document.getElementById('Anterior').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagenes.length - 1;
    showImage(currentIndex);
});

document.getElementById('Siguiente').addEventListener('click', () => {
    currentIndex = (currentIndex < imagenes.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
});
