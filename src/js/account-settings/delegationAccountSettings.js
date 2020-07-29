export class DelegationAccountSettings {
    constructor(accountSettingsCl) {
        this.accountSettingsCl = accountSettingsCl;
    }

    /**
    * Возвращает ближайший target от клика с data-settings-account-action атрибутом.
    * 
    * @param {object} event объект события.
    */
    getDesiredTarget(event) {
        let target = event.target;

        // Поиск элемента с data-атрибутами
        while (target !== event.currentTarget) {

            // Если target == null, значит был удалён элемент из DOM дерева.
            if (target !== null) {
                if (target.hasAttribute('data-settings-account-action')) {
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
     * Вызывает метод указанный в data-settings-account-action-action атрибуте из класса accountSettings.
     * 
     * @param {object} event объект события.
     */
    callAction(event) {
        const target = this.getDesiredTarget(event);

        if (target) {
            const settingsAccountAction = target.dataset.settingsAccountAction;

            if (settingsAccountAction) {
                this.accountSettingsCl[settingsAccountAction](target, event);
                return;
            }
        }
    }
}