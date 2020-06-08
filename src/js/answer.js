import { Controls } from './controls';

/**
 * Класс содержащий методы для работы с ответами. 
 */
export class Answer {
    constructor() {
        this.controlsCl = new Controls();
    }

    /**
     * Меняет тип варианта ответа.
     * 
     * @param {object} question блок вопроса.
     */
    changeAnswerType(question) {
        const select = question.getElementsByClassName('js-test-create-answer-type-select')[0],
            answersWrapper = question.getElementsByClassName('js-test-question-answers')[0],
            selectOptionData = select.getElementsByClassName('js-select-value')[0].dataset.selectOptionValue,
            currentAnswerType = question.dataset.answersType;

        question.dataset.answersType = selectOptionData;

        if (selectOptionData === '1' || selectOptionData === '2') {

            // Если текущий выбранный вариант ответа явлется текстовым или числовым.
            if (currentAnswerType === '3' || currentAnswerType === '4') {

                // Заменяет вариант ответа с текстового или числового на множестевнный или единичный.
                answersWrapper.innerHTML = '';
                this.addAnswer(question);

                // Включает возможность взаимодействия с кнопкой добавления варианта ответа.
                this.controlsCl.enableButton(question.getElementsByClassName('js-test-create-answer-add-btn')[0]);
            }
            else {
                let answers = answersWrapper.getElementsByClassName('js-test-question-answer'),
                    answerNum = 1;

                for (let answer of answers) {
                    let answerChoiceBtn = answer.getElementsByClassName('js-test-question-answer-choice-btn')[0];

                    answerChoiceBtn.remove();
                    answer.insertAdjacentHTML('afterbegin', this.getAnswerChoiceBtn(selectOptionData, question.dataset.questionNum, answerNum));

                    answerNum++;
                }

                this.deselect(question);
            }

            return;
        }

        if (selectOptionData === '3' || selectOptionData === '4') {
            this.addAnswer(question);

            this.controlsCl.disableButton(question.getElementsByClassName('js-test-create-answer-add-btn')[0]);
            return;
        }
    }

    /**
     * Возвращает блок с кнопкой варианта ответа.
     * Используется при смене варианта ответа.
     * 
     * @param {string} type тип варианта ответа который нужно вернуть.
     * @param {string} questionNum номер вопроса.
     * @param {string} answerNum номер ответа.
     */
    getAnswerChoiceBtn(type, questionNum, answerNum) {
        switch (type) {
            case '1':
                return `<div class="test-question-answer-checkbox js-test-question-answer-choice-btn">
                <input class="test-question-answer-checkbox--inp js-test-question-answer-choice-inp" id="answer${questionNum}${answerNum}" name="answerCheck${questionNum}" type="checkbox">
                <label class="js-test-question-answer-choice-label" for="answer${questionNum}${answerNum}"></label>
                </div>`;

            case '2':
                return `<div class="test-question-answer-radio js-test-question-answer-choice-btn">
                <input class="test-question-answer-radio--inp js-test-question-answer-choice-inp" id="answer${questionNum}${answerNum}" name="answerRadio${questionNum}" type="radio">
                <label class="js-test-question-answer-choice-label" for="answer${questionNum}${answerNum}"></label>
                </div>`;
        }
    }

    /**
     * Добавляет новый вариант ответа.
     * 
     * @param {object} question вопрос в котором добавляется вариант ответа.
     * @param {number} maxLimit максимальное ограничение на количество вариантов ответов в вопросе.
     */
    addAnswer(question, maxLimit = 1) {
        const questionNum = question.dataset.questionNum,
            type = question.dataset.answersType,
            answersWrapper = question.getElementsByClassName('js-test-question-answers')[0],
            answerAddBtn = question.getElementsByClassName('js-test-create-answer-add-btn')[0];

        let answers = answersWrapper.getElementsByClassName('js-test-question-answer');
        switch (type) {
            case '1':
                if (this.checkQuantityOfAnswers(question)) {
                    answersWrapper.insertAdjacentHTML('beforeEnd', this.getAnswerItem(type, questionNum, answers.length));

                    if (!this.checkQuantityOfAnswers(question)) {
                        this.controlsCl.disableButton(answerAddBtn);
                    }
                }
                break;

            case '2':
                if (this.checkQuantityOfAnswers(question)) {
                    answersWrapper.insertAdjacentHTML('beforeEnd', this.getAnswerItem(type, questionNum, answers.length));

                    if (!this.checkQuantityOfAnswers(question)) {
                        this.controlsCl.disableButton(answerAddBtn);
                    }
                }
                break;

            case '3':
                answersWrapper.innerHTML = this.getAnswerItem(type, questionNum);
                break;

            case '4':
                answersWrapper.innerHTML = this.getAnswerItem(type, questionNum);
                break;
        }

        if (type === '1' || type === '2') {
            const newAnswer = answers[answers.length - 1];

            // Вешает обработчик события метода удаления вопроса на добавленный вариант ответа.
            newAnswer.getElementsByClassName('js-test-create-question-answer-delete-btn')[0].onclick = (event) => this.deleteAnswer(event, question);

            // Вешает обработчик события метода выделения выбранного варианта ответа.
            newAnswer.getElementsByClassName('js-test-question-answer-choice-inp')[0].onchange = () => this.chooseAnAnswer(newAnswer);
        }
    }

    /**
     * Возвращает DOMString варианта ответа.
     * 
     * @param {string} type тип возвращаемого варианта.
     * @param {string} questionNum номер вопроса.
     * @param {number} answerNum номер варианта ответа.
     */
    getAnswerItem(type, questionNum, answerNum = 1) {
        switch (type) {
            case '1':
                return `<div class="test_create_bd-question-answer js-test-question-answer" data-answer-num="${answerNum + 1}">
                <div class="test-question-answer-checkbox js-test-question-answer-choice-btn">
                <input class="test-question-answer-checkbox--inp js-test-question-answer-choice-inp" id="answer${questionNum}${answerNum + 1}" name="answerCheck1" type="checkbox">
                <label class="js-test-question-answer-choice-label" for="answer${questionNum}${answerNum + 1}"></label>
                </div>
                <input class="inp test_create_bd-question-answer--inp js-test-question-answer-inp" name="answer" type="text" placeholder="Ответ №${answerNum + 1}">
                <button class="test_create_bd-question-answer--btn btn i-cross js-test-create-question-answer-delete-btn"></button></div>`;

            case '2':
                return `<div class="test_create_bd-question-answer js-test-question-answer" data-answer-num="${answerNum + 1}">
                <div class="test-question-answer-radio js-test-question-answer-choice-btn">
                <input class="test-question-answer-radio--inp js-test-question-answer-choice-inp" id="answer${questionNum}${answerNum + 1}" name="answerRadio1" type="radio">
                <label class="js-test-question-answer-choice-label" for="answer${questionNum}${answerNum + 1}"></label>
                </div>
                <input class="inp test_create_bd-question-answer--inp js-test-question-answer-inp" name="answer" type="text" placeholder="Ответ №${answerNum + 1}">
                <button class="test_create_bd-question-answer--btn btn i-cross js-test-create-question-answer-delete-btn"></button></div>`;

            case '3':
                return `<div class="test_create_bd-question-answer js-test-question-answer" data-answer-num="1">
                <input class="inp test_create_bd-question-answer--inp js-test-question-answer-inp" name="answer" type="text" placeholder="Ответ...">`;

            case '4':
                return `<div class="test_create_bd-question-answer js-test-question-answer" data-answer-num="1">
                <input class="inp test_create_bd-question-answer--inp js-test-question-answer-inp" name="answer" type="number" step="any" placeholder="1">`;
        }
    }

    /**
     * Удаляет вариант ответа.
     * 
     * @param {object} event событие.
     * @param {object} question вопрос удаляемого ответа.
     */
    deleteAnswer(event, question) {
        let answerForDelete = this.surfacingToAnswer(event.target),
            answers = question.getElementsByClassName('js-test-question-answer');

        if (answerForDelete !== undefined) {

            // Удаляет вариант ответа
            answerForDelete.remove();

            // Переисывает значения атрибутов у оставшихся вариантов
            let newAnswerNum = 1;
            for (let answer of answers) {
                answer.dataset.answerNum = newAnswerNum;

                answer.getElementsByClassName('js-test-question-answer-inp')[0].placeholder = `Ответ №${newAnswerNum}`;
                answer.getElementsByClassName('js-test-question-answer-choice-inp')[0].id = `answer${question.dataset.questionNum}${newAnswerNum}`;
                answer.getElementsByClassName('js-test-question-answer-choice-label')[0].setAttribute('for', `answer${question.dataset.questionNum}${newAnswerNum}`);

                newAnswerNum++;
            }

            if (this.checkQuantityOfAnswers(question)) {
                this.controlsCl.enableButton(question.getElementsByClassName('js-test-create-answer-add-btn')[0]);
            }
            else {
                this.controlsCl.disableButton(question.getElementsByClassName('js-test-create-answer-add-btn')[0]);
            }
        }
    }

    /**
     * Проверяет количество вопросов.
     * Возвращает false если количество вопросов равно или превышает заданный лимит и true, если нет.
     * 
     * @param {object} question - блок вопроса. 
     * @param {number} maxLimit - максимальный заданный лимит количества вопросов. По умолчанию равен 6.
     */
    checkQuantityOfAnswers(question, maxLimit = 6) {
        const answers = question.getElementsByClassName('js-test-question-answer');

        if (answers.length >= maxLimit) {
            return false;
        }
        else {
            return true;
        }
    }

    /**
     * Выделяет выбранный ответ.
     * 
     * @param {object} answer вариант ответа.
     */
    chooseAnAnswer(answer) {
        const choiceBtnInp = answer.getElementsByClassName('js-test-question-answer-choice-inp')[0];

        if (choiceBtnInp.checked) {
            if (!answer.classList.contains('test-question-answer-active')) {
                answer.classList.add('test-question-answer-active');
            }
        }
        else {
            if (answer.classList.contains('test-question-answer-active')) {
                answer.classList.remove('test-question-answer-active');
            }
        }
    }

    /**
     * Удаляет выделения выбранных ответов.
     * 
     * @param {object} question вопрос, с выбранных вариантов которого нужно снять выделение.
     */
    deselect(question) {
        for (let answer of question.getElementsByClassName('js-test-question-answer')) {
            if (answer.classList.contains('test-question-answer-active')) {
                answer.classList.remove('test-question-answer-active');
            }
        }
    }

    /**
    * Всплытие с element до ответа.
    * 
    * @param {object} element 
    */
    surfacingToAnswer(element) {
        while (element !== document) {
            if (element !== null) {
                if (element.classList.contains('js-test-question-answer')) {
                    return element;
                }
                element = element.parentNode;
            }
            else {
                return undefined;
            }
        }
    }

    setHandlers() {

    }
}