import { Message } from './message';
import { FileLoad } from './fileLoad';

export class Question {
    constructor() {
        this.wrapper = document.getElementById('bodyContent');
        this.body = this.wrapper.getElementsByClassName('js-test-questions')[0];
        this.questions = this.body.getElementsByClassName('js-test-question');
    }

    loadImage(event) {
        const question = this.surfacingToQuestion(event.target);

        new FileLoad().readImage(event.target.files[0], this.showImage, {
            showFunc: this.showImage,
            questionTag: question
        });
    }

    showImage(path, params) {
        const question = params.questionTag;

        if (question === undefined) {
            new Message().show('Что-то пошло не так. Поажлуйста, перезагрузите страницу.');
            return;
        }

        const imgTag = question.getElementsByClassName('js-test-question-img')[0];
        imgTag.setAttribute('src', path);

        if (!question.classList.contains('test_create_bd-question-image-active')) {
            question.classList.add('test_create_bd-question-image-active');
        }
    }

    /**
     * Показывает окно с дополнительными параметрами при добавлении вопроса.
     */
    showOrCloseQuestionAddParams() {
        const addBtnWrapper = this.body.getElementsByClassName('js-test-question-add-btn-wrapper')[0];
        addBtnWrapper.classList.toggle('test_create_bd-question-add-btn--more-active');
    }

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
        const questionAddMoreBtn = this.body.getElementsByClassName('js-test-question-add-btn')[0];
        if (questionAddMoreBtn !== undefined) {
            questionAddMoreBtn.onclick = () => this.showOrCloseQuestionAddParams();
        }

        for (let question of this.questions) {
            question.getElementsByClassName('js-test-create-question-image-inp')[0].onchange = (event) => this.loadImage(event);
        }
    }
}