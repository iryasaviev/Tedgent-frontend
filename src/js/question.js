export class Question {
    constructor() {
        this.wrapper = document.getElementById('bodyContent');
        this.body = this.wrapper.getElementsByClassName('js-test-questions')[0];
        this.qustions = this.body.getElementsByClassName('js-test-question');
    }

    addImage(event) {
        const qustion = this.body.getElementsByClassName('js-test-question')
    }

    /**
     * Показывает окно с дополнительными параметрами при добавлении вопроса.
     */
    showOrCloseQuestionAddParams() {
        const addBtnWrapper = this.body.getElementsByClassName('js-test-question-add-btn-wrapper')[0];
        addBtnWrapper.classList.toggle('test_create_bd-question-add-btn--more-active');
    }

    /**
     * Устанавливает обработчики события.
     */
    setHandlers() {
        const questionAddMoreBtn = this.body.getElementsByClassName('js-test-question-add-btn')[0];
        if (questionAddMoreBtn !== undefined) {
            questionAddMoreBtn.onclick = () => this.showOrCloseQuestionAddParams();
        }
    }
}