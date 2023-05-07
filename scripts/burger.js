const iconMenu = document.querySelector('.menu_icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu_body');
    const menuList = document.querySelector('.header_menu-list');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active3');
        menuBody.classList.toggle('_active3');
        menuList.classList.toggle('_active3');
    });
}

// $('.menu_body').on("click", function () {
//     $(".menu_body").toggleClass('.open');
// });

// $('.menu_body').on("click", function () {
//     $(".menu_body").hide();
//     document.body.classList.remove('_lock');
//     menuList.classList.remove('_active3');
// });