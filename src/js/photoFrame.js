export class PhotoFrame {
    constructor(page) {
        this.page = page;

        this.wrapper = page.body.getElementsByClassName('js-photo-frame')[0];
        this.img = this.wrapper.getElementsByClassName('js-photo-frame-img')[0];
    }

    /**
     * Показывает выбранное изображение.
     * 
     * @param {object} img изображение, на котором произошло нажатие.
     */
    show(img) {
        const imgPath = img.src;

        if (!this.page.body.classList.contains('photo-frame-active')) {
            this.page.body.classList.add('photo-frame-active');
        }

        this.img.src = imgPath;
    }

    /**
     * Закрывает показанное изображение.
     */
    close() {
        if (this.page.body.classList.contains('photo-frame-active')) {
            this.page.body.classList.remove('photo-frame-active');
        }

        this.img.src = '';
    }
}