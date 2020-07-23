import { TestResultForCreatorContent } from './testResultForCreatorContent';

export class TestResultForCreator {
    constructor(page) {
        this.page = page;

        this.contentCl = new TestResultForCreatorContent();
    }

    /**
     * Отвечает за загрузку страницы.
     * 
     * @param {object} contentBd DOM элемент, в которое должно вставляться основное содержимое.
     */
    runPage(contentBd) {
        contentBd.innerHTML = this.contentCl.getPage();
    }
}