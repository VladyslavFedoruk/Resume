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