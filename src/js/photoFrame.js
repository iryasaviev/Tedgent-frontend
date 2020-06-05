export class PhotoFrame {
    constructor() {
        this.wrapper = document.getElementsByClassName('js-photo-frame')[0];
        this.img = this.wrapper.getElementsByClassName('js-photo-frame-img')[0];
    }

    showOrCloseFrame(pathToImg) {
        const body = document.getElementById('body');

        if (pathToImg !== undefined) {
            if (!body.classList.contains('photo-frame-active')) {
                body.classList.add('photo-frame-active');
            }
            this.img.src = pathToImg;
        }
        else {
            if (body.classList.contains('photo-frame-active')) {
                body.classList.remove('photo-frame-active');
            }
            this.img.src = '';
        }
    }

    setHandlers() {
        this.wrapper.onclick = () => this.showOrCloseFrame();
    }
}