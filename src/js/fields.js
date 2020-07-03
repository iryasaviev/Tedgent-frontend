export class Fields {
    constructor(page) {
        this.page = page;
    }

    /**
     * Проверяет количество введенных символов в поле и предпринимает соотвествующие меры при нарушении ограничений.
     * 
     * @param {*} event событие.
     * @param {*} inpWrapper обёрточный блок родитель у поля для ввода и блока количества введенных символов.
     */
    checkValueLengthAndTakeAction(event, inpWrapper) {
        let maxLimit = 200, minLimit = 0;

        if (inpWrapper.dataset.charactersLimit !== 'true')
            return;

        let inp = event.target;

        if (inp.dataset.charactersMaxLimitValue !== undefined) {
            maxLimit = Number(inp.dataset.charactersMaxLimitValue);
        }

        if (inp.dataset.charactersMinLimitValue !== undefined) {
            minLimit = Number(inp.dataset.charactersMinLimitValue);
        }

        if (!this.checkCharactersLimit(inp.value, maxLimit, minLimit)) {
            this.overwriteValue(inp, maxLimit);
        }

        this.changeCharactersLimitValue(inpWrapper, inp, maxLimit);
    }

    /**
     * Перезаписывает введенное в поле значение в пределах лимита.
     * 
     * @param {*} inp поле для ввода.
     * @param {number} maxLimit максимально допустимое количество символов.
     */
    overwriteValue(inp, maxLimit) {
        let newValue = '',
            charNum = 1;

        for (let char of inp.value) {

            if (newValue == undefined || newValue == '') {
                newValue = char
            }
            else {
                newValue += char;
            }

            if (charNum >= maxLimit) {
                break;
            }

            charNum++;
        }

        inp.value = newValue;
    }

    /**
     * Меняет значение количества введеных символов в соответсвующем блоке.
     * 
     * @param {*} inpWrapper обёрточный блок родитель у поля для ввода и блока количества введенных символов.
     * @param {*} inp поле для ввода.
     * @param {number} maxLimit максимально допустимое количество символов из которого вычитается количество введенных.
     * 
     */
    changeCharactersLimitValue(inpWrapper, inp, maxLimit) {
        let valueTag = inpWrapper.getElementsByClassName('js-inp-limit-value')[0];

        valueTag.innerText = maxLimit - inp.value.length;
    }

    /**
     * Проверяет количество введенных символов с поставленным ограничением.
     * 
     * @param {string} value введенное значение.
     * @param {number} maxLimit максимально допустимое количество символов.
     * @param {number} minLimit  минимально допустимое количество символов. По умолчанию = 0.
     */
    checkCharactersLimit(value, maxLimit = 200, minLimit = 0) {
        if (value.length <= minLimit) {
            return false;
        }

        if (value.length >= maxLimit) {
            return false;
        }

        return true;
    }

    checkValueForDateInput(event) {
        let inp = event.target,
            value = inp.value;

        if (isNaN(Number(value[value.length - 1]))) {
            if (value[value.length - 1] !== '.') {
                inp.value = value.substring(0, value.length - 1);
            }
        }
    }

    checkValueTypeOnNumber(value) {
        if (isNaN(value)) {
            return false;
        }
        else {
            return true;
        }
    }

    /**
     * Устанавливает обработчики событий.
     */
    setHandlers() {
        let inpWrappers = this.page.body.getElementsByClassName('js-inp-wrapper');
        for (let inpWrapper of inpWrappers) {
            inpWrapper.getElementsByClassName('js-inp')[0].oninput = (event) => this.checkValueLengthAndTakeAction(event, inpWrapper);
        }

        let dateInps = this.page.body.getElementsByClassName('js-date-inp');
        for (let dateInp of dateInps) {
            dateInp.oninput = (event) => this.checkValueForDateInput(event);
        }
    }
}