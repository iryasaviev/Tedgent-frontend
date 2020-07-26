import { FileLoad } from '../fileLoad';
import { Timer } from '../timer';

import { Answer } from '../answer/answer';
import { QuestionContent } from './questionContent';
import { DelegationQuestion } from './deleagtionQuestion';

/**
 * Class with methods for work with question.
 * Класс с методами для работы с вопросом.
 */
export class Question {
    constructor(page) {
        this.answerCl = new Answer(this);
        this.contentCl = new QuestionContent();
        this.delegationQuestionCl = new DelegationQuestion(this, this.answerCl);

        this.page = page;
        this.questions = this.page.content.getElementsByClassName('js-test-question');
    }

    /**
     * Отвечает за загрузку изображения вопроса.
     * 
     * @param {object} event событие.
     */
    loadImage(event) {
        const question = this.surfacingToQuestion(event.target);

        new FileLoad().readImage(event.target.files[0], this.showImage, {
            showFunc: this.showImage,
            questionTag: question,
            photoFrameCl: this.page.photoFrameCl
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
            this.messageCl.show('Что-то пошло не так. Поажлуйста, перезагрузите страницу.');
            return;
        }

        const imgTag = question.getElementsByClassName('js-test-question-img')[0];

        imgTag.setAttribute('src', path);

        if (!question.classList.contains('test_create_bd-question-image-active')) {
            question.classList.add('test_create_bd-question-image-active');
        }

        // imgBackground.onclick = () => params.photoFrameCl.showOrCloseFrame(path);
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
        const questionAddMenu = this.page.content.getElementsByClassName('js-test-create-question-add')[0],
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

            this.page.content.getElementsByClassName('js-test-questions')[0].insertAdjacentHTML('beforeend', questionsDom);

            // Вешает обработчики событий
            this.setHandlers();

            // Вешает все необходимые обработчики на select
            this.page.selectCl.setHandlers();
        }
    }

    /**
     * Возвращает сформированный DOMString вопроса.
     * 
     * @param {*} answerType тип ответа.
     * @param {*} questionNum номер формируемого вопроса.
     * @param {*} answersQuantity количество вариантов ответа в добавляемом вопросе.
     * @param {*} answersQuantityMaxLimit ограничение на максимальное количество вариантов ответа в добавляемом вопросе.
     */
    getQuestionItem(answerType, questionNum, answersQuantity, answersQuantityMaxLimit = 6) {
        let answers = this.getAnswersForAddingQuestion(answersQuantity, answerType, questionNum),
            answersString,
            answerAddBtn;

        for (let answer of answers) {
            if (answersString === undefined) {
                answersString = answer;
            }
            else {
                answersString += answer;
            }
        }

        if (answers.length >= answersQuantityMaxLimit ||
            answerType === '3' || answerType === '4') {
            answerAddBtn = this.contentCl.getAnswerAddBtn(true);
        }
        else {
            answerAddBtn = this.contentCl.getAnswerAddBtn(false);
        }

        return this.contentCl.getQuestion(questionNum, answerType, answerAddBtn, answersString, this.contentCl.getAnswerTypeSelect(answerType));
    }

    /**
     * Возвращает массив с DOMString вариантами ответов у нового вопроса.
     * 
     * @param {number} answersQuantity количество вариантов ответа в новом вопросе.
     * @param {string} answerType тип вариантов ответа в добавляемом вопросе.
     * @param {string} questionNum порядковый номер добавляемого вопроса.
     */
    getAnswersForAddingQuestion(answersQuantity = 1, answerType = '1', questionNum) {
        let answers = [];

        if (answerType === '1' || answerType === '2') {
            for (let answerNum = 0; answerNum < Number(answersQuantity); answerNum++) {
                if (answerNum >= 6) {
                    break;
                }
                answers[answers.length] = this.answerCl.getAnswerItem(answerType, questionNum, answerNum);
            }
        }
        else {
            if (answerType === '3' || answerType === '4') {
                answers[0] = this.answerCl.getAnswerItem(answerType, questionNum);
            }
        }

        return answers;
    }

    /**
     * Показывает окно с дополнительными параметрами при добавлении вопроса.
     */
    showOrCloseQuestionAddParams() {
        const addBtnWrapper = this.page.content.getElementsByClassName('js-test-question-add-btn-wrapper')[0];
        addBtnWrapper.classList.toggle('test_create_bd-question-add-btn--more-active');
    }

    /**
     * Удаляет вопрос, заменяя его на сообщение с возможностью восстановления.
     * 
     * @param {object} question вопрос.
     */
    deleteQuestion(target) {
        let question = this.surfacingToQuestion(target);

        if (!question.classList.contains('test_create_bd-question-deleted')) {
            question.classList.add('test_create_bd-question-deleted');
        }

        question.insertAdjacentHTML('beforeEnd', this.contentCl.getQuestionDeleteMessage());

        this.updateQuestionDeleteTime(question, 7);
    }

    /**
     * Стирает блок вопроса с DOM и перезаписывает системные атрибуты у оставшихся элементов.
     * 
     * @param {*} question вопрос.
     */
    removeQuestion(question) {
        question.remove();

        let questionNum = 1;
        for (let question of this.questions) {

            question.dataset.questionNum = questionNum;
            question.getElementsByClassName('js-test-create-question-title')[0].placeholder = `Вопрос №${questionNum}`;

            let answerNum = 1;
            for (let answer of question.getElementsByClassName('js-test-question-answer')) {

                if (question.dataset.answersType === '1' || question.dataset.answersType === '2') {
                    answer.getElementsByClassName('js-test-question-answer-choice-inp')[0].id = `answer${questionNum}${answerNum}`;
                    answer.getElementsByClassName('js-test-question-answer-choice-label')[0].setAttribute('for', `answer${questionNum}${answerNum}`);

                    if (question.dataset.answersType === '1') {
                        answer.getElementsByClassName('js-test-question-answer-choice-inp')[0].name = `answerCheck${questionNum}`;
                    }
                    if (question.dataset.answersType === '2') {
                        answer.getElementsByClassName('js-test-question-answer-choice-inp')[0].name = `answerRadio${questionNum}`;
                    }
                }

                answerNum++;
            }

            questionNum++;
        }
    }

    /**
     * Обновляет значение таймера в блоке удаления вопроса.
     * Когда результат будет равен 0, вопрос удаляется.
     * 
     * @param {*} question вопрос.
     * @param {number} time оставшееся время на восстановление вопроса.
     */
    updateQuestionDeleteTime(question, time) {
        let timer = new Timer(),
            result = question.getElementsByClassName('js-test-create-question-deleted-message-time')[0];

        if (question.classList.contains('test_create_bd-question-deleted')) {
            time = timer.countDown(time, 0);
            result.innerText = time;

            setTimeout(() => this.updateQuestionDeleteTime(question, time), 1000);

            if (time === 0) {
                this.removeQuestion(question);
            }
        }
    }

    /**
     * Восстанавливает удалённый вопрос.
     * 
     * @param {object} target элемент на котором произошло событие.
     */
    restoreQuestion(target) {
        let question = this.surfacingToQuestion(target);

        question.getElementsByClassName('js-test-create-question-deleted-message')[0].remove()

        if (question.classList.contains('test_create_bd-question-deleted')) {
            question.classList.remove('test_create_bd-question-deleted');
        }
    }

    /**
     * Отвечает за обработку введенного значения в поле.
     * 
     * @param {object} event событие.
     */
    inputToQuestion(event) {
        this.page.fieldCl.autoHeightChange(event, 10, 10, '36px');

        let inp = event.target,
            inpWrapper = inp.parentElement;

        this.page.fieldCl.checkValueLengthAndTakeAction(event, inpWrapper);
    }

    /**
     * Вслытие с element до вопроса.
     * 
     * @param {object} element элемент с которого произвоидтся всплытие.
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
     * Устанавливает обработчики событий.
     */
    setHandlers() {
        for (let question of this.questions) {

            // Вешает обработчик события на поле для вопроса, для обработки ввода
            const questionInp = question.getElementsByClassName('js-test-create-question-title')[0];
            questionInp.oninput = (event) => this.inputToQuestion(event);

            // Вешает обработчик события input на соответствующий тег у селекта
            let answerTypeSelectValueInp = question.getElementsByClassName('select_hd-value--inp')[0];
            answerTypeSelectValueInp.oninput = () => this.answerCl.changeAnswerType(question);

            // Вешает обработчик кнопки выбора правильного варианта ответа
            let answerChooseInp = question.getElementsByClassName('js-test-question-answer-choice-inp')[0];
            if (answerChooseInp !== undefined) {
                answerChooseInp.onchange = () => this.answerCl.chooseAnAnswer(question.getElementsByClassName('js-test-question-answer')[0], question);
            }

            // Вешает обработчик события метода загрзуки изображения вопроса
            question.getElementsByClassName('js-test-create-question-image-inp')[0].onchange = (event) => this.loadImage(event);

            // Вешает обработчик события метода удаления загруженной фотографии вопроса
            question.getElementsByClassName('js-test-question-img-del-btn')[0].onclick = () => this.deleteImage(question);

            // Вешает обработчик события click на вопрос для делегирования
            question.onclick = (event) => this.delegationQuestionCl.callAction(event);
        }
    }
}