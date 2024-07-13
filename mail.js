'use strict';

const btnNext = document.querySelector('.btn_next');
const btnBack = document.querySelector('.btn_back');
const sliderTrack = document.querySelector('.slider_track');
const elements = document.querySelectorAll('.element');
const totalSlides = elements.length;
let currentSlide = 0;

function updateSlider(position) {
    sliderTrack.style.transform = `translateX(${position}%)`;
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlider(-100 * currentSlide);
}

function backSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    updateSlider(-100 * currentSlide);
}

btnNext.addEventListener('click', nextSlide);
btnBack.addEventListener('click', backSlide);
