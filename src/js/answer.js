export class Answer {
    changeAnswerType(question) {
        const select = question.getElementsByClassName('js-test-create-answer-type-select')[0],
            answersWrapper = question.getElementsByClassName('js-test-question-answers')[0],
            selectOptionData = select.getElementsByClassName('js-select-value')[0].dataset.selectOptionValue,
            currentAnswerType = answersWrapper.dataset.answersType;

        if (selectOptionData === '1' || selectOptionData === '2') {

            // Если текущий выбранный вариант ответа явлется текстовым или числовым.
            if (currentAnswerType === '3' || currentAnswerType === '4') {
                answersWrapper.innerHTML = '';
                this.addAnswer(question);

                answersWrapper.getElementsByClassName('js-test-question-answer')[0].onclick = () => this.deleteAnswer();
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
            }

            answersWrapper.dataset.answersType = selectOptionData;
            return;
        }

        if (selectOptionData === '3' || selectOptionData === '4') {
            this.addAnswer(question);
            answersWrapper.dataset.answersType = selectOptionData;

            answersWrapper.getElementsByClassName('js-test-question-answer')[0].onclick = () => this.deleteAnswer();
            return;
        }
    }

    getAnswerChoiceBtn(type, questionNum, answerNum) {
        switch (type) {
            case '1':
                return `<div class="test-question-answer-checkbox js-test-question-answer-choice-btn">
                <input class="test-question-answer-checkbox--inp" id="answer${questionNum}${answerNum}" name="answerCheck${questionNum}" type="checkbox">
                <label for="answer${questionNum}${answerNum}"></label>
                </div>`;

            case '2':
                return `<div class="test-question-answer-radio js-test-question-answer-choice-btn">
                <input class="test-question-answer-radio--inp" id="answer${questionNum}${answerNum}" name="answerRadio${questionNum}" type="radio">
                <label for="answer${questionNum}${answerNum}"></label>
                </div>`;
        }
    }

    addAnswer(question, maxLimit = 1) {
        const questionNum = question.dataset.questionNum,
            type = question.getElementsByClassName('js-test-question-answers')[0].dataset.answersType,
            answersWrapper = question.getElementsByClassName('js-test-question-answers')[0];

        let answers = answersWrapper.getElementsByClassName('js-test-question-answer');
        switch (type) {
            case '1':
                if (answers.length < maxLimit) {
                    answersWrapper.insertAdjacentHTML('beforeEnd', this.getAnswerItem(type, questionNum, answers.length));
                }
                break;

            case '2':
                if (answers.length < maxLimit) {
                    answersWrapper.insertAdjacentHTML('beforeEnd', this.getAnswerItem(type, questionNum, answers.length));
                }
                break;

            case '3':
                answersWrapper.innerHTML = this.getAnswerItem(type, questionNum);
                break;

            case '4':
                answersWrapper.innerHTML = this.getAnswerItem(type, questionNum);
                break;
        }
    }

    getAnswerItem(type, questionNum, answerNum = 1) {
        switch (type) {
            case '1':
                return `<div class="test_create_bd-question-answer js-test-question-answer" data-answer-num="1">
                <div class="test-question-answer-checkbox js-test-question-answer-choice-btn">
                <input class="test-question-answer-checkbox--inp" id="answer${questionNum}${answerNum + 1}" name="answerCheck1" type="checkbox">
                <label for="answer${questionNum}${answerNum + 1}"></label>
                </div>
                <input class="inp test_create_bd-question-answer--inp" name="answer" type="text" value="Ответ №1">
                <button class="test_create_bd-question-answer--btn btn i-cross js-test-create-question-answer-delete-btn"></button></div>`;

            case '2':
                return `<div class="test_create_bd-question-answer js-test-question-answer" data-answer-num="1">
                <div class="test-question-answer-radio js-test-question-answer-choice-btn">
                <input class="test-question-answer-radio--inp" id="answer${questionNum}${answerNum + 1}" name="answerRadio1" type="radio">
                <label for="answer${questionNum}${answerNum + 1}"></label>
                </div>
                <input class="inp test_create_bd-question-answer--inp" name="answer" type="text" value="Ответ №2">
                <button class="test_create_bd-question-answer--btn btn i-cross js-test-create-question-answer-delete-btn"></button></div>`;

            case '3':
                return `<div class="test_create_bd-question-answer js-test-question-answer" data-answer-num="1">
                <input class="inp test_create_bd-question-answer--inp" name="answer" type="text" value="Ответ...">`;

            case '4':
                return `<div class="test_create_bd-question-answer js-test-question-answer" data-answer-num="1">
                <input class="inp test_create_bd-question-answer--inp" name="answer" type="number" step="any" value="1">`;
        }
    }

    deleteAnswer() {

    }

    setHandlers() {

    }
}