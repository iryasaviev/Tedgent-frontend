export class MoreMenu {
    constructor() {
        this.items = document.getElementsByClassName('js-more-menu');
    }

    openOrClose(wrapper) {
        wrapper.classList.toggle('active');
    }

    setHandlers() {
        for (let item of this.items) {
            item.getElementsByClassName('js-more-menu-btn')[0].onclick = () => this.openOrClose(item);
        }
    }
}