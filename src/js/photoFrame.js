export class PhotoFrame {
    constructor(page) {
        this.page = page;

        this.wrapper = page.body.getElementsByClassName('js-photo-frame')[0];
        this.img = this.wrapper.getElementsByClassName('js-photo-frame-img')[0];
    }

    /**
     * Показывает или закрывает необходимое изображение.
     * 
     * @param {*} pathToImg путь к изображению.
     */
    showOrCloseFrame(pathToImg) {
        if (pathToImg !== undefined) {
            if (!this.page.body.classList.contains('photo-frame-active')) {
                this.page.body.classList.add('photo-frame-active');
            }
            this.img.src = pathToImg;
        }
        else {
            if (this.page.body.classList.contains('photo-frame-active')) {
                this.page.body.classList.remove('photo-frame-active');
            }
            this.img.src = '';
        }
    }

    /**
     * Устанавливает обработчики событий.
     */
    setHandlers() {
        this.wrapper.onclick = () => this.showOrCloseFrame();
    }
}