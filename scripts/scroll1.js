let button0 = document.querySelector('.item1');
let sectionFirst = document.querySelector('.hero');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

if (button0 && sectionFirst) {
    button0.addEventListener('click', () => {
        scrollTo(sectionFirst);
    })
}

let button = document.querySelector('.item2');
let sectionTwo = document.querySelector('.skills');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

if (button && sectionTwo) {
    button.addEventListener('click', () => {
        scrollTo(sectionTwo);
    })
}

let button1 = document.querySelector('.item3');
let sectionThree = document.querySelector('.qualification');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

if (button1 && sectionThree) {
    button1.addEventListener('click', () => {
        scrollTo(sectionThree);
    })
}

let button2 = document.querySelector('.item4');
let sectionFour = document.querySelector('.portfolio_desk-subName');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

if (button2 && sectionFour) {
    button2.addEventListener('click', () => {
        scrollTo(sectionFour);
    })
}

let button3 = document.querySelector('.item5');
let sectionFive = document.querySelector('.footer');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

if (button3 && sectionFive) {
    button3.addEventListener('click', () => {
        scrollTo(sectionFive);
    })
}