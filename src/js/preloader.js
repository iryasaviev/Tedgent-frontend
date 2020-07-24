export class Preloader {
    constructor(page) {
        this.page = page;
    }

    /**
     * Показывает preloader.
     * 
     * @param {string} text текст.
     */
    show(text = '') {
        if (!this.page.body.classList.contains('preloader-active')) {
            this.page.body.classList.add('preloader-active');
        }

        this.changeText(text);
    }

    /**
     * Меняет текст у preloader'а.
     * 
     * @param {string} text текст.
     */
    changeText(text) {
        this.page.preloader.getElementsByClassName('js-preloader-text')[0].innerText = text;
    }

    /**
     * Закрывает preloader.
     */
    close() {
        if (this.page.body.classList.contains('preloader-active')) {
            this.page.body.classList.remove('preloader-active');
        }
    }
}