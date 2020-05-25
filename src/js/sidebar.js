import { DarkTheme } from './darkTheme';

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
        // new DarkTheme().setOrRemoveTheme();
        this.body.classList.toggle('dark-theme');
    }

    setHandlers() {
        this.menu.getElementsByClassName('sidebar_hd--btn')[0].onclick = () => this.openOrClose();

        for (let nightModeBtn of this.menu.getElementsByClassName('js-dark-theme-btn')) {
            nightModeBtn.onclick = () => this.nightModeToggle();
        }
    }
}