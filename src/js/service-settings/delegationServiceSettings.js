export class DelegationServiceSettings {
    constructor (serviceSettingsCl) {
        this.serviceSettingsCl = serviceSettingsCl;
    }

    /**
     * Возвращает ближайший target от клика с data-settings-service-action атрибутом.
     * 
     * @param {object} event объект события.
     */
    getDesiredTarget(event) {
        let target = event.target;

        // Поиск элемента с data-атрибутами
        while (target !== event.currentTarget) {

            // Если target == null, значит был удалён элемент из DOM дерева.
            if (target !== null) {
                if (target.hasAttribute('data-settings-service-action')) {
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
     * Вызывает метод указанный в data-settings-service-action-action атрибуте из класса settingsService.
     * 
     * @param {object} event объект события.
     */
    callAction(event) {
        const target = this.getDesiredTarget(event);

        if (target) {
            const settingsServiceAction = target.dataset.settingsServiceAction;

            if (settingsServiceAction) {
                this.serviceSettingsCl[settingsServiceAction](target, event);
                return;
            }
        }
    }
}