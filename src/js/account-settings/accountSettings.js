import { AccountSettingsContent } from './accountSettingsContent';
import { DelegationAccountSettings } from './delegationAccountSettings';

export class AccountSettings {
    constructor(page) {
        this.page = page;

        this.contentCl = new AccountSettingsContent();
        this.delegationAccountSettingsCl = new DelegationAccountSettings(this);
    }

    /**
     * Метод для валидации фамилии, имени и отчества.
     * 
     * @param {object} inp проверяемое поле для ввода.
     */
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

    /**
     * Метод для валидации имени пользователя.
     * 
     * @param {object} inp проверяемое поле для ввода.
     */
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

    /**
     * Показывает пример ссылки с вводимым именем пользователя.
     * 
     * @param {object} inp поле для ввода имени пользователя.
     */
    showUsernameLinkExample(inp) {
        let value = inp.value,
            linkExample = this.page.content.getElementsByClassName('js-settings-account-info-username-link-example')[0];

        linkExample.innerText = value;
    }

    /**
     * Метод для валидации пароля.
     * 
     * @param {object} inp поля для ввода пароля.
     */
    passwordValidation(inp) {
        let haveError = false,
            inpWrapper = this.page.fieldCl.surfacingToInpWrapper(inp);

        if (inp.value.length !== 0) {
            if (!this.page.fieldCl.checkOnPassword(inp.value)) {
                haveError = true;
                this.page.fieldCl.showError(inpWrapper,
                    'Пароль должен быть на латинице, содержать минимум одну цифру, букву в верхнем и нижнем регистре и иметь длину не менее 8 символов.');
            }
        }

        if (!haveError) {
            this.page.fieldCl.hideError(inpWrapper);
        }
    }

    /**
     * Проверяет значение с полей для ввода нового пароля на идентичность.
     * 
     * @param {object} newPassInp поля для ввода нового пароля.
     * @param {object} newPassRetryInp поля для повторного ввода нового пароля.
     */
    validateNewPassword(newPassInp, newPassRetryInp) {
        let haveError = false,
            newPassRetryInpWrapper = this.page.fieldCl.surfacingToInpWrapper(newPassRetryInp);

        if (newPassInp.value.length !== 0) {
            if (newPassInp.value !== newPassRetryInp.value) {
                this.page.fieldCl.showError(newPassRetryInpWrapper,
                    'Пароли не совпадают.');
                haveError = true;
            }
        }

        if (!haveError) {
            this.page.fieldCl.hideError(newPassRetryInpWrapper);
        }
    }

    /**
     * Собирает данные с полей для ввода формы Публичные данные.
     */
    collectDataFromPublic() {
        const form = this.page.content.getElementsByClassName('js-account-settings-public-data-form')[0],
            inps = form.getElementsByClassName('js-inp');

        let data = {};
        for (let inp of inps) {
            switch (inp.name) {
                case 'firstName':
                    data.firstName = inp.value;
                    break;

                case 'lastName':
                    data.lastName = inp.value;
                    break;

                case 'patronymic':
                    data.patronymic = inp.value;
                    break;

                case 'dateOfBirth':
                    data.dateOfBirth = inp.value;
                    break;

                case 'username':
                    data.username = inp.value;
                    break;
            }
        }

        return data;
    }

    /**
     * Собирает данные с полей для ввода формы Безопасность.
     */
    collectDataFromSecurity() {
        const form = this.page.content.getElementsByClassName('js-account-settings-security-data-form')[0],
            inps = form.getElementsByClassName('js-inp');

        let data = {};
        for (let inp of inps) {
            switch (inp.name) {
                case 'currentPassword':
                    data.currentPassword = inp.value;
                    break;

                case 'newPassword':
                    data.newPassword = inp.value;
                    break;

                case 'newPasswordRetry':
                    data.newPasswordRetry = inp.value;
                    break;
            }
        }

        return data;
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

        // Вешает обработчики событий на поля для ввода
        const inps = this.page.content.getElementsByClassName('js-inp');
        for (let inp of inps) {

            // Вешает обработчики событий на поля ФИО
            if (inp.name === 'firstName' || inp.name === 'lastName') {
                inp.addEventListener('input', () => this.fullNameValidation(inp));
            }

            // Вешает обработчик события на поле имени пользователя
            if (inp.name === 'username') {
                inp.addEventListener('input', () => this.usernameValidation(inp));
                inp.addEventListener('input', () => this.showUsernameLinkExample(inp));
            }

            // Вешает обработчик события на поля для ввода и смены пароля
            if (inp.name === 'newPassword') {
                inp.addEventListener('input', () => this.passwordValidation(inp));
            }

            // Вешает обработчики событий на поля для ввода нового пароля и его повтора 
            if (inp.name === 'newPasswordRetry' || inp.name === 'newPassword') {
                let newPassword = this.page.content.getElementsByClassName('js-account-settings-new-password-inp')[0],
                    newPasswordRetry = this.page.content.getElementsByClassName('js-account-settings-new-password-retry-inp')[0];
                inp.addEventListener('input', () => this.validateNewPassword(newPassword, newPasswordRetry));
            }
        }

        // Вешает обработчик события click на оберточный элемент страницы
        this.page.content.getElementsByClassName('js-account-bd')[0].onclick = (event) => this.delegationAccountSettingsCl.callAction(event);
    }
}