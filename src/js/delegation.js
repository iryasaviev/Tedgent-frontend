export class Delegation {
    constructor(page) {
        this.page = page;
    }

    /**
     * Возвращает ближайший target от клика с data-action атрибутом.
     * 
     * @param {object} event объект события.
     */
    getDesiredTarget(event) {
        let target = event.target,
            click = target;

        // Поиск элемента с data-атрибутами
        while (target !== event.currentTarget) {

            // Если target == null, значит был удалён элемент из DOM дерева.
            if (target !== null) {
                if (target.hasAttribute('data-action')) {
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
     * Вызывает метод указанный в data-action атрибуте из текущего класса страницы.
     * 
     * @param {object} event объект события.
     */
    callAction(event) {
        const target = this.getDesiredTarget(event);

        if (target) {

            const action = target.dataset.action;
            if (!action)
                return;

            if (target.hasAttribute('data-run-in-frame')) {

                switch (target.dataset.runInFrame) {
                    case 'sidebar':
                        this.page.sidebarCl[action]();
                        break;

                    case 'dialogWindow':
                        this.page.dialogWindowCl[action]();
                        break;

                    case 'photoFrame':
                        this.page.photoFrameCl[action](target);
                        break;

                    // Если метод должен быть вызван из класса Page
                    case 'true':
                        this.page[action](target);
                        break;
                }
            }
            else {
                this.page.currentPageCl[action](target, event);
            }
        }

        this.page.closeWindows(event);
    }
}