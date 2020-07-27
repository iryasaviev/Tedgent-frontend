import { AccountSettingsContent } from './accountSettingsContent';

export class AccountSettings {
    constructor(page) {
        this.page = page;

        this.contentCl = new AccountSettingsContent();
    }

    collectPublicData() {
        const form = this.page.content.getElementsByClassName('js-account-settings-public-data-form')[0],
            inps = form.getElementsByClassName('js-inp');

        let data,
            errorIsHave = false;
        for (let inp of inps) {
            switch (inp.name) {
                case 'firstName':
                    break;

                case 'lastName':
                    break;

                case 'patronomyc':
                    break;

                case 'patronomyc':
                    break;

                case 'username':
                    errorIsHave = this.page.fieildsCl.checkOnUserName(inp.value);
                    this.page.fieildsCl.showError();
                    break;
            }
        }
    }

    /**
     * Отвечает за загрузку страницы.
     * 
     * @param {object} contentBd DOM элемент, в которое должно вставляться основное содержимое.
     */
    runPage(contentBd) {
        // contentBd.innerHTML = this.contentCl.getPage();

        this.setHandlers();
    }

    /**
     * Устанавливает обработчики событий.
     */
    setHandlers() {

    }
}