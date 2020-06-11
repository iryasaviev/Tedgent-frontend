import { PhotoFrame } from './photoFrame';
import { Message } from './message';
import { FileLoad } from './fileLoad';

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

    addQuestion() {
        const addParamsBtn = this.body.getElementsByClassName('js-test-question-add-btn-params')[0],
            addParamsWrapper = addParamsBtn.getElementsByClassName('js-test-question-add-btn-params-wrapper')[0],
            addParamsQuestionsQuantity = addParamsWrapper.getElementsByClassName('js-test-question-add-btn-params-questions')[0].value,
            addParamsAnswersQuantity = addParamsWrapper.getElementsByClassName('js-test-question-add-btn-params-answers')[0].value,
            addParamsType = addParamsWrapper.getElementsByClassName('js-test-question-add-btn-params-type')[0].getElementsByClassName('js-select-value').dataset.selectOptionValue;

        let newQuestions;
        for (let i = 0; 30 >= i; i++) {

            // Если количество имеющихся и новых вопросов превышает 30, то добавлние прекращается
            if (30 >= this.questions.length + newQuestions.length) {
                return;
            }

            let newQuestion = this.getQuestionItem(addParamsType, this.questions.length + newQuestions.length);
            newQuestions[newQuestions.length] = newQuestion;
        }

        // Вставка новых вопросов в body
        if (newQuestions.length > 0) {
            this.body.insertAdjacentElement('beforeend', newQuestions);
        }
    }

    getQuestionItem(answerType, questionNum) {
        switch (answerType) {
            case '1':
                return `<div class="test_create_bd-question js-test-question" data-question-num="${questionNum}" data-answers-type="1">
                <div class="test_create_bd-question-col1">
                  <div class="test_create_bd-question-col1-row">
                    <button class="test_create_bd-question-col1-row--btn btn i-cross"></button>
                    <input class="inp test_create_bd-question-col1-row--inp" name="qustion" type="text" placeholder="Вопрос №${questionNum}">
                  </div>
                  <div class="test_create_bd-question-col1-row test_create_bd-question-col1-row-image">
                    <div class="test_create_bd-question-col1-image">
                      <div class="test_create_bd-question-col1-image--bcg js-test-question-img-background"></div>
                      <img class="test_create_bd-question-col1--img js-test-question-img">
                    </div>
                  </div>
                  <div class="test_create_bd-question-col1-row test_create_bd-question-answers js-test-question-answers">
                    <div class="test_create_bd-question-answer js-test-question-answer" data-answer-num="1">
                      <div class="test-question-answer-checkbox js-test-question-answer-choice-btn">
                        <input class="test-question-answer-checkbox--inp js-test-question-answer-choice-inp" id="answer${questionNum}1" name="answerCheck1"
                          type="checkbox">
                        <label class="js-test-question-answer-choice-label" for="answer${questionNum}1"></label>
                      </div>
                      <input class="inp test_create_bd-question-answer--inp js-test-question-answer-inp" name="answer" type="text" placeholder="Ответ №1">
                      <button class="test_create_bd-question-answer--btn btn i-cross js-test-create-question-answer-delete-btn"></button>
                    </div>
                  </div>
                  <div class="test_create_bd-question-col1-row test_create_bd-question-col1-row-add-answer">
                    <button class="test_create_bd-question-answer-add--btn btn js-test-create-answer-add-btn">
                      <span class="i-plus"></span>
                      <span class="txt">Вариант</span>
                    </button>
                  </div>
                </div>
                <div class="test_create_bd-question-col2">
                  <label class="test_create_bd-question-col2--btn btn i-image">
                    <input class="test_create_bd-question-col2--inp js-test-create-question-image-inp" type="file"
                      accept="image/*">
                  </label>
                  <div class="test_create_bd-question--select select js-test-create-answer-type-select">
                    <button class="test_create_bd-question--select_hd select_hd">
                      <div class="select_hd-value js-select-value" data-select-option-value="1">
                        <div class="test_create_bd-question--select-option--icon i-checkbox"></div>
                        <div class="test_create_bd-question--select-option--txt">Множественный выбор</div>
                      </div>
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
                  </div>
                </div>
              </div>`;

            case '2':
                return ``;

            case '3':
                return ``;

            case '4':
                return ``;
        }
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

        const questionAddMoreBtn = this.body.getElementsByClassName('js-test-question-add-btn-params')[0];
        if (questionAddMoreBtn !== undefined) {
            questionAddMoreBtn.onclick = () => this.showOrCloseQuestionAddParams();
        }
    }
}