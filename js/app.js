'use strict'

class LeftMenu {
    constructor() {
        this.menu = document.getElementById('leftMenu');
    }

    openOrClose(menu) {
        this.menu.classList.toggle('left_menu-active');
    }
}

document.addEventListener('DOMContentLoaded', function(){
    let leftMenu = new LeftMenu();

    leftMenu.menu.getElementsByClassName('left_menu-hd--btn')[0].onclick = () => leftMenu.openOrClose();
});