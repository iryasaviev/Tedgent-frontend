export class Question {
    constructor() {
        this.wrapper = document.getElementById('bodyContent');
        this.body = this.wrapper.getElementsByClassName('js-test-questions')[0];
        this.qustions = this.wrapper.getElementsByClassName('js-test-question');
    }

    /**
     * Показывает окно с дополнительными параметрами при добавлении вопроса.
     */
    showOrCloseQuestionAddParams() {
        const addBtnWrapper = this.body.getElementsByClassName('js-test-question-add-btn-wrapper')[0];

        addBtnWrapper.classList.toggle('test_create_bd-question-add-btn--more-active');

        // if (!addBtnWrapper.classList.contains('test_create_bd-question-add-btn--more-active')) {
        //     addBtnWrapper.classList.add('test_create_bd-question-add-btn--more-active');
        // }
    }

    /**
     * Закрывает окно с дополнительными параметрами при добавлении вопроса.
     */
    closeQuestionAddParams() {
        const addBtnWrapper = this.body.getElementsByClassName('js-test-question-add-btn-wrapper')[0];

        if (addBtnWrapper.classList.contains('test_create_bd-question-add-btn--more-active')) {
            addBtnWrapper.classList.remove('test_create_bd-question-add-btn--more-active');
        }
    }

    setHandlers() {
        const questionAddMoreBtn = this.body.getElementsByClassName('js-test-question-add-btn')[0];
        if (questionAddMoreBtn !== undefined) {
            questionAddMoreBtn.onclick = () => this.showOrCloseQuestionAddParams();
        }
    }
}