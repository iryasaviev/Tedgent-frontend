export class Message {
    constructor(page) {
        this.page = page;
    }

    /**
     * Показывает сообщение.
     * 
     * @param {string} text текст сообщения.
     */
    show(text) {
        let messText = this.page.message.getElementsByClassName('js-message-text')[0];

        messText.innerText = text;

        if (!this.page.body.classList.contains('message-active')) {
            this.page.body.classList.add('message-active');
        }

        setTimeout(this.hide, 4000, this.page.body);
    }

    /**
     * Скрывает сообщение.
     * 
     * @param {object} body тело страницы.
     */
    hide(body) {
        if (body.classList.contains('message-active')) {
            body.classList.remove('message-active');
        }
    }
}