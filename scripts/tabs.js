'use strict';

function Tabs() {
    let bindAll = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (let i = 0; i < menuElements.length; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    }

    let clear = function () {
        let menuElements = document.querySelectorAll('[data-tab]');
        for (let i = 0; i < menuElements.length; i++) {
            menuElements[i].classList.remove('active2');
            let id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active2');
        }
    }

    let change = function (e) {
        clear();
        e.target.classList.add('active2');
        let id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active2');
    }

    bindAll();
}

let connectTabs = new Tabs();