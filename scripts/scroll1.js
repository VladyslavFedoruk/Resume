let button = document.querySelector('.item1');
let sectionTwo = document.querySelector('.hero_content-descr');

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