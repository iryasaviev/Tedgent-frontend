import { AccountSettingsContent } from './accountSettingsContent';

export class AccountSettings {
    constructor(page) {
        this.page = page;

        this.contentCl = new AccountSettingsContent();
    }

    fullNameValidation(inp) {
        let haveError = false,
            inpWrapper = this.page.fieldCl.surfacingToInpWrapper(inp);

        if (!this.page.fieldCl.checkOnEmpty(inp.value)) {
            haveError = true;
            this.page.fieldCl.showError(inpWrapper,
                'Это поле не может быть пустым.');
        }

        if (!haveError) {
            this.page.fieldCl.hideError(inpWrapper);
        }
    }

    usernameValidation(inp) {
        let haveError = false,
            inpWrapper = this.page.fieldCl.surfacingToInpWrapper(inp);

        if (inp.value.length !== 0) {
            if (!this.page.fieldCl.checkOnUsername(inp.value)) {
                haveError = true;
                this.page.fieldCl.showError(inpWrapper,
                    'Имя пользователя может быть написано только на латинице, содержать цифры и иметь длину от 5 до 20 символов.');
            }
        }

        if (!haveError) {
            this.page.fieldCl.hideError(inpWrapper);
        }
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
        const inps = this.page.content.getElementsByClassName('js-inp');
        for (let inp of inps) {

            // Вешает обработчики событий на поля ФИО
            if (inp.name === 'firstName' ||
                inp.name === 'lastName' ||
                inp.name === 'patronymic') {
                inp.addEventListener('input', () => this.fullNameValidation(inp));
            }

            // Вешает обработчик события на поле имени пользователя
            if (inp.name === 'username') {
                inp.addEventListener('input', () => this.usernameValidation(inp));
            }
        }
    }
}