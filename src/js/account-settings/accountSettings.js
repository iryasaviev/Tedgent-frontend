import { AccountSettingsContent } from './accountSettingsContent';

export class AccountSettings {
    constructor(page) {
        this.page = page;

        this.contentCl = new AccountSettingsContent();
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

    }
}