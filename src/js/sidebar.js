export class Sidebar {
    constructor() {
        this.body = document.getElementById('body');
        this.menu = this.body.getElementsByClassName('sidebar')[0];
    }

    openOrClose() {
        this.body.classList.toggle('sidebar-active');

        let btn = this.menu.getElementsByClassName('sidebar_hd--btn')[0];
        btn.classList.toggle('i-arrow-right');
        btn.classList.toggle('i-arrow-left');
    }

    nightModeToggle() {
        this.body.classList.toggle('night-mode');
    }

    setHandlers() {
        this.menu.getElementsByClassName('sidebar_hd--btn')[0].onclick = () => this.openOrClose();
        this.menu.getElementsByClassName('nightMode')[0].onclick = () => this.nightModeToggle();
    }
}