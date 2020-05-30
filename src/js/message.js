export class Message {
    constructor() {
        this.body = document.getElementById('body');
        this.messWrapper = this.body.getElementsByClassName('js-message')[0];
    }

    show(text) {
        let messText = this.messWrapper.getElementsByClassName('js-message-text')[0];

        messText.innerText = text;

        if (!this.body.classList.contains('message-active')) {
            this.body.classList.add('message-active');
        }

        setTimeout(this.hide, 4000);
    }

    hide() {
        if (this.body.classList.contains('message-active')) {
            this.body.classList.remove('message-active');
        }
    }
}