import { SearchContent } from './searchContent';

export class Search {
    constructor(page) {
        this.page = page;

        this.contentCl = new SearchContent();
    }

    /**
     * Сбрасывает заполненные фильтры.
     */
    discardFilter() {
        let subject = this.page.content.getElementsByClassName('js-search-filter-subject')[0],
            date = this.page.content.getElementsByClassName('js-search-filter-date')[0];

        subject.getElementsByClassName('js-select-value')[0].innerHTML = '';
        subject.getElementsByClassName('js-select-value')[0].dataset.selectOptionValue = 0;

        date.value = '';
    }

    /**
     * Отвечает за загрузку страницы.
     * 
     * @param {object} contentBd DOM элемент, в которое должно вставляться основное содержимое.
     */
    runPage(contentBd) {
        contentBd.innerHTML = this.contentCl.getPage();

        this.setHandlers();
    }

    /**
     * Устанавливает обработчики событий.
     */
    setHandlers() {
        let discardBtn = this.page.content.getElementsByClassName('js-search-filter-discard')[0];
        discardBtn.onclick = () => this.discardFilter();
    }
}