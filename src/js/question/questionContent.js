export class QuestionContent {

    /**
     * Возвращает DOMString сформированного вопроса.
     * 
     * @param {number} questionNum номер вопроса.
     * @param {string} answerType тип варианта ответа.
     * @param {string} answerAddBtn кнопка добавления ответа. 
     * @param {string} answersString строка с добавлямыми вместе с вопросом вариантами ответов.
     * @param {string} answerTypeSelect кнопка для выбора варианта ответа (select) у вопроса.
     */
    getQuestion(questionNum, answerType, answerAddBtn, answersString, answerTypeSelect) {
        return `<div class="test_create_bd-question js-test-question" data-question-num="${questionNum}" data-answers-type="${answerType}">
        <div class="test_create_bd-question_bd js-test-question-body">
            <div class="test_create_bd-question-col1">
                <div class="test_create_bd-question-col1-row">
                    <button class="test_create_bd-question-col1-row--btn btn i-cross js-test-create-question-del-btn" data-question-action="deleteQuestion"></button>
                    <div class="inp_wr js-inp-wrapper" data-characters-limit="true" data-auto-hang-handler="false">
                        <textarea class="test_create_bd-question-title--inp inp js-inp js-test-create-question-title" name="question" type="text" data-characters-max-limit-value="250" placeholder="Вопрос №${questionNum}"></textarea>
                    </div>
                </div>
                <div class="test_create_bd-question-col1-row test_create_bd-question-col1-row-image">
                    <div class="test_create_bd-question-col1-image">
                        <button class="test_create_bd-question-img--del-btn i-cross btn js-test-question-img-del-btn" data-question-action="deleteImage"></button>
                        <img class="test_create_bd-question--img js-test-question-img" data-action="show" data-run-in-frame="photoFrame">
                    </div>
                </div>
                <div class="test_create_bd-question-col1-row test_create_bd-question-answers js-test-question-answers">${answersString}</div>
                <div class="test_create_bd-question-col1-row test_create_bd-question-col1-row-add-answer">${answerAddBtn}</div>
            </div>
            <div class="test_create_bd-question-col2">
                <label class="test_create_bd-question-col2--btn btn i-image">
                    <input class="test_create_bd-question-col2--inp js-test-create-question-image-inp" type="file" accept="image/*">
                </label>
                ${answerTypeSelect}
            </div>
        </div>
    </div>`;
    }

    /**
     * Возвращает DOMString кнопки выбора (select) варианта ответа.
     * 
     * @param {string} answerType тип варианта ответа.
     */
    getAnswerTypeSelect(answerType) {
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
            `<div class="test_create_bd-question--select select js-select js-test-create-answer-type-select">
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
     * Возвращает DOMString сообщения об удалении вопроса.
     */
    getQuestionDeleteMessage() {
        return `<div class="test_create_bd-question-deleted-mess js-test-create-question-deleted-message">
        <p>Вопрос будет удалён через <span class="test_create_bd-question-deleted-mess--time js-test-create-question-deleted-message-time">7</span>.</p>
        <button class="test_create_bd-question-deleted-mess--btn btn-icon js-test-create-question-restore-btn" data-question-action="restoreQuestion">Восстановить</button>
        </div>`;
    }

    /**
     * Возвращает DOMString кнпоки добавления варианта ответа. 
     * 
     * @param {boolean} isDisabled опредеяет является ли кнопки кликабельной. true - отключена, false - включена.
     */
    getAnswerAddBtn(isDisabled) {
        if (isDisabled) {
            return `<button class="test_create_bd-question-answer-add--btn btn btn-2 btn-disable js-test-create-answer-add-btn" disabled>
            <span class="i-plus"></span>
            <span class="txt">Вариант</span>
            </button>`;
        }
        else {
            return `<button class="test_create_bd-question-answer-add--btn btn btn-2 js-test-create-answer-add-btn" data-answer-action="addAnswer">
            <span class="i-plus"></span>
            <span class="txt">Вариант</span>
            </button>`;
        }
    }
}