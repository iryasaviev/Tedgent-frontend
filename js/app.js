'use strict'

class Sidebar {
    constructor() {
        this.body = document.getElementById('body');
        this.menu = this.body.getElementsByClassName('sidebar')[0];
    }

    openOrClose() {
        this.body.classList.toggle('sidebar-active');
    }

    nightModeToggle() {
        this.body.classList.toggle('night-mode');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let sidebar = new Sidebar();
    sidebar.menu.getElementsByClassName('sidebar_hd--btn')[0].onclick = () => sidebar.openOrClose();
    sidebar.menu.getElementsByClassName('nightMode')[0].onclick = () => sidebar.nightModeToggle();

});