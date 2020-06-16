export class Fields {
    constructor(body) {
        this.body = body;
    }

    /**
     * Изменяет цвет у поля для ввода.
     * 
     * @param {*} inp поле для ввода, цвет которого требуется изменить.
     */
    changeColor(inp) {
        if (inp.value.length > 0) {
            if (!inp.classList.contains('inp-bckg-white')) {
                inp.classList.add('inp-bckg-white');
            }
        }
        else {
            if (inp.classList.contains('inp-bckg-white')) {
                inp.classList.remove('inp-bckg-white');
            }
        }
    }

    /**
     * Устанавливает обработчики событий.
     */
    setHandlers() {
        for (let input of this.body.getElementsByClassName('inp')) {
            input.oninput = () => this.changeColor(input);
        }
    }
}