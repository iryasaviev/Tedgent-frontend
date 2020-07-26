export class DelegationQuestion {
    constructor(questionCl, answerCl) {
        this.questionCl = questionCl;
        this.answerCl = answerCl;
    }

    /**
     * Возвращает ближайший target от клика с data-question-action атрибутом.
     * 
     * @param {object} event объект события.
     */
    getDesiredTarget(event) {
        let target = event.target;

        // Поиск элемента с data-атрибутами
        while (target !== event.currentTarget) {

            // Если target == null, значит был удалён элемент из DOM дерева.
            if (target !== null) {
                if (target.hasAttribute('data-question-action') || target.hasAttribute('data-answer-action')) {
                    return target;
                }
                target = target.parentNode;
            }
            else {
                break;
            }
        }
    }

    /**
     * Вызывает метод указанный в data-question-action атрибуте из класса question.
     * 
     * @param {object} event объект события.
     */
    callAction(event) {
        const target = this.getDesiredTarget(event);

        if (target) {
            const questionAction = target.dataset.questionAction,
                answerAction = target.dataset.answerAction;

            if (questionAction) {
                this.questionCl[questionAction](target, event);
                return;
            }

            if (answerAction) {
                this.answerCl[answerAction](target, event);
                return;
            }
        }
    }
}