const header = document.querySelector('.header');
window.onscroll = function () {
    let top = window.scrollY;
    console.log(top);
    if (top >= 48) {
        header.classList.add('active')
    } else {
        header.classList.remove('active');
    }
}