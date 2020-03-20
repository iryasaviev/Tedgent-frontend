'use strict'

class LeftMenu {
    constructor() {
        this.body = document.getElementById('body');
        this.menu = document.getElementById('leftMenu');
    }

    openOrClose(menu) {
        this.body.classList.toggle('sidebar-active');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let leftMenu = new LeftMenu();
    leftMenu.menu.getElementsByClassName('sidebar_hd--btn')[0].onclick = () => leftMenu.openOrClose();
});