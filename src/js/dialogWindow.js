export class DialogWindow {
    constructor(page) {
        this.page = page;
    }

    /**
     * Показывает диалоговое окно.
     * 
     * @param {object} continueFunc функция, которая сработает после нажатия на кнопку "Выполнить".
     * @param {string} text текст, которой необходимо вывести.
     * @param {object} continueFuncParams параметры, необходимые для выполняющей функции.
     */
    show(continueFunc, text, continueFuncParams) {
        if (!this.page.body.classList.contains('dialog-window-active')) {
            this.page.body.classList.add('dialog-window-active');
        }

        this.page.dialogWindow.getElementsByClassName('js-dialog-window-text')[0].innerText = text;

        let executeBtn = this.page.dialogWindow.getElementsByClassName('js-dialog-window-execute-btn')[0];
        executeBtn.onclick = () => continueFunc(continueFuncParams);

        this.close();
    }

    /**
     * Закрывает диалоговое окно.
     */
    close() {
        if (this.page.body.classList.contains('dialog-window-active')) {
            this.page.body.classList.remove('dialog-window-active');
        }
    }
}