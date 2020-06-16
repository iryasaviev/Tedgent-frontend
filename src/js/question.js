import { PhotoFrame } from './photoFrame';
import { Message } from './message';
import { FileLoad } from './fileLoad';
import { Select } from './select';

import { Answer } from './answer';

/**
 * Class with methods for work with question.
 * Класс с методами для работы с вопросом.
 */
export class Question {
    constructor() {
        this.answerCl = new Answer();

        this.wrapper = document.getElementById('bodyContent');
        this.body = this.wrapper.getElementsByClassName('js-test-questions')[0];
        this.questions = this.body.getElementsByClassName('js-test-question');
    }

    /**
     * Отвечает за загрузку изображения вопроса.
     * 
     * @param {object} event 
     */
    loadImage(event) {
        const question = this.surfacingToQuestion(event.target);

        new FileLoad().readImage(event.target.files[0], this.showImage, {
            showFunc: this.showImage,
            questionTag: question
        });
    }

    /**
     * Выводит изображение вопроса.
     * 
     * @param {string} path - Blob путь загруженного изображения.
     * @param {object} params - Необходимые параметры.
     */
    showImage(path, params) {
        const question = params.questionTag;

        if (question === undefined) {
            new Message().show('Что-то пошло не так. Поажлуйста, перезагрузите страницу.');
            return;
        }

        const imgBackground = question.getElementsByClassName('js-test-question-img-background')[0],
            imgTag = question.getElementsByClassName('js-test-question-img')[0];

        imgTag.setAttribute('src', path);

        if (!question.classList.contains('test_create_bd-question-image-active')) {
            question.classList.add('test_create_bd-question-image-active');
        }

        imgBackground.onclick = () => new PhotoFrame().showOrCloseFrame(path);
    }

    /**
     * Удаляет прикрепленное изображение вопроса.
     * 
     * @param {*} question вопрос.
     */
    deleteImage(question) {
        const img = question.getElementsByClassName('js-test-question-img')[0];

        img.src = '';

        if (question.classList.contains('test_create_bd-question-image-active')) {
            question.classList.remove('test_create_bd-question-image-active');
        }
    }

    /**
     * Добавляет новый вопрос.
     */
    addQuestion() {
        const questionAddMenu = this.wrapper.getElementsByClassName('js-test-create-question-add')[0],
            questionAddMenuMore = questionAddMenu.getElementsByClassName('js-test-question-add-btn-params')[0],
            questionsQuantity = questionAddMenuMore.getElementsByClassName('js-test-question-add-btn-params-questions')[0].value,
            answersQuantity = questionAddMenuMore.getElementsByClassName('js-test-question-add-btn-params-answers')[0].value,
            answerType = questionAddMenuMore.getElementsByClassName('js-test-question-add-btn-params-type')[0].value;

        let newQuestions = [];
        for (let newQuestionNum = 1; Number(questionsQuantity) >= newQuestionNum; newQuestionNum++) {

            // Если количество имеющихся и новых вопросов превышает 30, то добавлние прекращается
            if (30 <= this.questions.length + newQuestions.length) {
                break;
            }

            let newQuestion = this.getQuestionItem(answerType, this.questions.length + newQuestionNum, answersQuantity);
            newQuestions[newQuestions.length] = newQuestion;
        }

        // Вставка новых вопросов в body
        if (newQuestions.length > 0) {
            let questionsDom;

            for (let question of newQuestions) {
                if (questionsDom === undefined) {
                    questionsDom = question;
                }
                else {
                    questionsDom = questionsDom + question;
                }
            }

            this.body.insertAdjacentHTML('beforeend', questionsDom);

            let answerCl = new Answer();

            // Вешает обработчики событий
            for (let question of this.questions) {

                // На кнопку удаления вопроса
                question.getElementsByClassName('js-test-create-question-del-btn')[0].onclick = () => this.deleteQuestion(question);

                // На кнопку добавления варианта ответа
                question.getElementsByClassName('js-test-create-answer-add-btn')[0].onclick = () => answerCl.addAnswer(question);

                // На select выбора типа ответа
                question.getElementsByClassName('js-select-head')[0].onclick = () => new Select().openOrClose(question.getElementsByClassName('js-select')[0]);

                for (let answer of question.getElementsByClassName('js-test-question-answer')) {

                    // Вешает обработчик на кнопку удаления варианта ответа
                    answer.getElementsByClassName('js-test-create-question-answer-delete-btn')[0].onclick = (event) => answerCl.deleteAnswer(event, question);

                    // Вешает обработчик на кнопку выделения варианта ответа
                    answer.getElementsByClassName('js-test-question-answer-choice-inp')[0].onchange = () => answerCl.chooseAnAnswer(answer, question);
                }
            }
        }
    }

    getQuestionItem(answerType, questionNum, answersQuantity) {
        let answers = this.getAnswersForAddingQuestion(answersQuantity, answerType, questionNum),
            answersString;

        for (let answer of answers) {
            if (answersString === undefined) {
                answersString = answer;
            }
            else {
                answersString += answer;
            }
        }


        let question = `<div class="test_create_bd-question js-test-question" data-question-num="${questionNum}" data-answers-type="${answerType}">
            <div class="test_create_bd-question_bd js-test-question-body">
            <div class="test_create_bd-question-col1">
                <div class="test_create_bd-question-col1-row">
                <button class="test_create_bd-question-col1-row--btn btn i-cross js-test-create-question-del-btn"></button>
                <input class="inp test_create_bd-question-title--inp" name="qustion" type="text" placeholder="Вопрос №${questionNum}">
                </div>
                <div class="test_create_bd-question-col1-row test_create_bd-question-col1-row-image">
                <div class="test_create_bd-question-col1-image">
                    <buttonclass="test_create_bd-question-img--del-btn i-cross btn js-test-question-img-del-btn"></button>
                    <div class="test_create_bd-question-img--bcg js-test-question-img-background"></div>
                    <img class="test_create_bd-question--img js-test-question-img">
                </div>
                </div>
                <div class="test_create_bd-question-col1-row test_create_bd-question-answers js-test-question-answers">${answersString}</div>
                <div class="test_create_bd-question-col1-row test_create_bd-question-col1-row-add-answer">
                <button class="test_create_bd-question-answer-add--btn btn js-test-create-answer-add-btn">
                    <span class="i-plus"></span>
                    <span class="txt">Вариант</span>
                </button>
                </div>
            </div>
            <div class="test_create_bd-question-col2">
                <label class="test_create_bd-question-col2--btn btn i-image">
                <input class="test_create_bd-question-col2--inp js-test-create-question-image-inp" type="file" accept="image/*">
                </label>
                ${this.getAnswerTypeSelectItem(answerType)}
            </div>
            </div>
            </div>`;

        return question;
    }

    /**
     * Возвращает select типа варианта ответа для добавляемого вопроса.
     * 
     * @param {*} answerType выбранный тип ответа для добавляемого вопроса.
     */
    getAnswerTypeSelectItem(answerType) {
        let selectValue;

        switch (answerType) {
            case '1':
                selectValue = `<div class="select_hd-value js-select-value" data-select-option-value="${answerType}">
                <div class="test_create_bd-question--select-option--icon i-checkbox"></div>
                <div class="test_create_bd-question--select-option--txt">Множественный выбор</div>
                </div>
                <input class="select_hd-value--inp js-select-value-inp" type="text" value="${answerType}">`;
                break;

            case '2':
                selectValue = `<div class="select_hd-value js-select-value" data-select-option-value="${answerType}">
                <div class="test_create_bd-question--select-option--icon i-radiobox"></div>
                <div class="test_create_bd-question--select-option--txt">Одиночный выбор</div>
                </div>
                <input class="select_hd-value--inp js-select-value-inp" type="text" value="${answerType}">`;
                break;

            case '3':
                selectValue = `<div class="select_hd-value js-select-value" data-select-option-value="${answerType}">
                <div class="test_create_bd-question--select-option--icon i-text"></div>
                <div class="test_create_bd-question--select-option--txt">Текстовый ответ</div>
                </div>
                <input class="select_hd-value--inp js-select-value-inp" type="text" value="${answerType}">`;
                break;

            case '4':
                selectValue = `<div class="select_hd-value js-select-value" data-select-option-value="${answerType}">
                <div class="test_create_bd-question--select-option--icon i-number"></div>
                <div class="test_create_bd-question--select-option--txt">Числовой ответ</div>
                </div>
                <input class="select_hd-value--inp js-select-value-inp" type="text" value="${answerType}">`;
                break;
        }

        let select =
            `<div class="test_create_bd-question--select select js-test-create-answer-type-select">
            <button class="test_create_bd-question--select_hd select_hd js-select-head">
                ${selectValue}
                <div class="select_hd--icon i-down-arrow"></div>
            </button>
            <div class="select_bd">
            <button class="select_bd-option" data-select-option="1">
                <div class="test_create_bd-question--select-option--icon i-checkbox"></div>
                <div class="test_create_bd-question--select-option--txt">Множественный выбор</div>
            </button>
            <button class="select_bd-option" data-select-option="2">
                <div class="test_create_bd-question--select-option--icon i-radiobox"></div>
                <div class="test_create_bd-question--select-option--txt">Одиночный выбор</div>
            </button>
            <button class="select_bd-option" data-select-option="3">
                <div class="test_create_bd-question--select-option--icon i-text"></div>
                <div class="test_create_bd-question--select-option--txt">Текстовый ответ</div>
            </button>
            <button class="select_bd-option" data-select-option="4">
                <div class="test_create_bd-question--select-option--icon i-number"></div>
                <div class="test_create_bd-question--select-option--txt">Числовой ответ</div>
            </button>
            </div>
            </div>`;

        return select;
    }

    /**
     * Возвращает массив с DOMString вариантами ответов у нового вопроса.
     * 
     * @param {number} answersQuantity количество вариантов ответа в новом вопросе.
     * @param {string} answerType тип вариантов ответа в добавляемом вопросе.
     * @param {string} questionNum порядковый номер добавляемого вопроса.
     */
    getAnswersForAddingQuestion(answersQuantity = 1, answerType = '1', questionNum) {
        let answerCl = new Answer(),
            answers = [];

        if (answerType === '1' || answerType === '2') {
            for (let answerNum = 0; answerNum < Number(answersQuantity); answerNum++) {
                answers[answers.length] = answerCl.getAnswerItem(answerType, questionNum, answerNum);
            }
        }
        else {
            if (answerType === '3' || answerType === '4') {
                answers[0] = answerCl.getAnswerItem(answerType, questionNum);
            }
        }

        return answers;
    }

    /**
     * Показывает окно с дополнительными параметрами при добавлении вопроса.
     */
    showOrCloseQuestionAddParams() {
        const addBtnWrapper = this.body.getElementsByClassName('js-test-question-add-btn-wrapper')[0];
        addBtnWrapper.classList.toggle('test_create_bd-question-add-btn--more-active');
    }

    /**
     * Удаляет вопрос, заменяя его на сообщение с возможностью восстановления.
     * 
     * @param {*} question вопрос.
     */
    deleteQuestion(question) {
        if (!question.classList.contains('test_create_bd-question-deleted')) {
            question.classList.add('test_create_bd-question-deleted');
        }

        question.insertAdjacentHTML('beforeEnd',
            `<div class="test_create_bd-question-deleted-mess js-test-create-question-deleted-message">
            <p>Вопрос удалён.</p>
            <button class="test_create_bd-question-deleted-mess--btn btn-icon js-test-create-question-restore-btn">Восстановить</button>
            </div>`);

        question.getElementsByClassName('js-test-create-question-restore-btn')[0].onclick = () => this.restoreQuestion(question);
    }

    /**
     * Восстанавливает удалённый вопрос.
     * 
     * @param {*} question вопрос.
     */
    restoreQuestion(question) {
        question.getElementsByClassName('js-test-create-question-deleted-message')[0].remove()

        if (question.classList.contains('test_create_bd-question-deleted')) {
            question.classList.remove('test_create_bd-question-deleted');
        }
    }

    /**
     * Вслытие с element до вопроса.
     * 
     * @param {*} element 
     */
    surfacingToQuestion(element) {
        while (element !== document) {
            if (element !== null) {
                if (element.classList.contains('js-test-question')) {
                    return element;
                }
                element = element.parentNode;
            }
            else {
                return undefined;
            }
        }
    }

    /**
     * Устанавливает обработчики события.
     */
    setHandlers() {
        for (let question of this.questions) {

            // Вешает обработчик события input на соответствующий тег у селекта
            let answerTypeSelectValueInp = question.getElementsByClassName('select_hd-value--inp')[0];
            answerTypeSelectValueInp.oninput = () => this.answerCl.changeAnswerType(question);

            question.getElementsByClassName('js-test-create-answer-add-btn')[0].onclick = () => this.answerCl.addAnswer(question, 6);
            question.getElementsByClassName('js-test-create-question-answer-delete-btn')[0].onclick = (event) => this.answerCl.deleteAnswer(event, question);
            question.getElementsByClassName('js-test-question-answer-choice-inp')[0].onchange = () => this.answerCl.chooseAnAnswer(question.getElementsByClassName('js-test-question-answer')[0], question);

            // Вешает обработчик события метода загрзуки изображения вопроса
            question.getElementsByClassName('js-test-create-question-image-inp')[0].onchange = (event) => this.loadImage(event);

            // Вешает обработчик события метода удаления загруженной фотографии вопроса
            question.getElementsByClassName('js-test-question-img-del-btn')[0].onclick = () => this.deleteImage(question);

            // Вешает обработчик события метода удаления вопроса
            question.getElementsByClassName('js-test-create-question-del-btn')[0].onclick = () => this.deleteQuestion(question);
        }

        // Вешает обработчик на кнопку добавления вопроса
        const questionAddBtn = this.wrapper.getElementsByClassName('js-test-question-add-btn')[0];
        if (questionAddBtn !== undefined) {
            questionAddBtn.onclick = () => this.addQuestion();
        }
    }
}