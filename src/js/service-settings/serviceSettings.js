
import { ServiceSettingsContent } from './serviceSettingsContent';
import { DelegationServiceSettings } from './delegationServiceSettings';

export class ServiceSettings {
    constructor(page) {
        this.page = page;

        this.contentCl = new ServiceSettingsContent();
        this.delegationServiceSettingsCl = new DelegationServiceSettings(this);
    }

    /**
     * Изменяет состояние тумблеров, в зависимости от примененных ранее настроек.
     */
    setSwitchStates() {
        let bcgSolidColorToggle = this.page.content.getElementsByClassName('js-settings-service-appearance-img-solid-color-toggle')[0];
        if (!this.page.backgroundImg.classList.contains('bd_bcg-active')) {
            this.page.controlsCl.switchToggle(bcgSolidColorToggle);
        }

        let bcgBlurToggle = this.page.content.getElementsByClassName('js-settings-service-appearance-img-blur-toggle')[0];
        if (this.page.backgroundImg.classList.contains('bd_bcg-blur')) {
            this.page.controlsCl.switchToggle(bcgBlurToggle);
        }
    }

    /**
     * Изменяет фоновое изображение.
     * 
     * @param {object} target элемент на котором сработало событие (родительский блок выбранного изображения).
     */
    changeBackgroundImage(target) {
        const imgNum = target.dataset.backgroundImgNum;

        let bcgSelector = `bd_bcg-${imgNum}`;

        for (let num = 1; 6 >= num; num++) {
            if (this.page.backgroundImg.classList.contains(`bd_bcg-${num}`)) {
                this.page.backgroundImg.classList.remove(`bd_bcg-${num}`);
            }
        }

        this.page.backgroundImg.classList.add(bcgSelector);

        if (!this.page.backgroundImg.classList.contains('bd_bcg-active')) {
            this.page.backgroundImg.classList.add('bd_bcg-active');

            let solidColorToggle = this.page.content.getElementsByClassName('js-settings-service-appearance-img-solid-color-toggle')[0];
            if (solidColorToggle.classList.contains('toggle-active')) {
                this.page.controlsCl.switchToggle(solidColorToggle);
            }
        }

        // ToDo: Реализовать отправку изменений на сервер.
    }

    /**
     * Выбирает размыто ли фоновое изображение.
     * 
     * @param {object} target элемент на котором сработало событие (тумблер).
     */
    toggleBackgroundBlur(target) {
        let toggleValue = target.getElementsByClassName('js-toggle-btn')[0].dataset.toggleValue;

        if (toggleValue === 'true') {
            if (!this.page.backgroundImg.classList.contains('bd_bcg-blur')) {
                this.page.backgroundImg.classList.add('bd_bcg-blur');
            }
        }
        else {
            if (this.page.backgroundImg.classList.contains('bd_bcg-blur')) {
                this.page.backgroundImg.classList.remove('bd_bcg-blur');
            }
        }

        // ToDo: Реализовать отправку изменений на сервер.
    }

    /**
     * Выбирает является ли сплошной цвет фоном.
     * 
     * @param {object} target элемент на котором сработало событие (тумблер).
     */
    toggleBackgroundSolidColor(target) {
        let toggleValue = target.getElementsByClassName('js-toggle-btn')[0].dataset.toggleValue;

        if (toggleValue === 'true') {
            if (this.page.backgroundImg.classList.contains('bd_bcg-active')) {
                this.page.backgroundImg.classList.remove('bd_bcg-active');
            }
        }
        else {
            if (!this.page.backgroundImg.classList.contains('bd_bcg-active')) {
                this.page.backgroundImg.classList.add('bd_bcg-active');
            }
        }

        // ToDo: Реализовать отправку изменений на сервер.
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

        // Вешает обработчик события click на оберточный элемент страницы
        this.page.content.getElementsByClassName('js-settings-bd')[0].onclick = (event) => this.delegationServiceSettingsCl.callAction(event);

        // Изменяет состояние тумблеров, в зависимости от примененных ранее настроек
        this.setSwitchStates();
    }
}