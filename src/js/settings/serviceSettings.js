export class ServiceSettings {
    constructor(page) {
        this.page = page;
    }

    /**
     * Изменяет фоновое изображение.
     * 
     * @param {object} imgWrapper родительский блок выбранного изображения.
     * @param {object} solidColorToggle тумблер переключения фона на сплошной цвет. Срабатывает (выключается) при выборе изображения в качестве фона.
     */
    changeBackgroundImage(imgWrapper, solidColorToggle) {
        const imgNum = imgWrapper.dataset.backgroundImgNum;

        let bcgSelector = `bd_bcg-${imgNum}`;

        for (let num = 1; 6 >= num; num++) {
            if (this.page.backgroundImg.classList.contains(`bd_bcg-${num}`)) {
                this.page.backgroundImg.classList.remove(`bd_bcg-${num}`);
            }
        }

        this.page.backgroundImg.classList.add(bcgSelector);

        if (!this.page.backgroundImg.classList.contains('bd_bcg-active')) {
            this.page.backgroundImg.classList.add('bd_bcg-active');

            if (solidColorToggle.classList.contains('toggle-active')) {
                this.page.controlsCl.switchToggle(solidColorToggle);
            }
        }

        // ToDo: Реализовать отправку изменений на сервер.
    }

    /**
     * Выбирает размыто ли фоновое изображение.
     * 
     * @param {object} toggle тумблер.
     */
    toggleBackgroundBlur(toggle) {
        let toggleValue = toggle.getElementsByClassName('js-toggle-btn')[0].dataset.toggleValue;

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
     * @param {object} toggle тумблер.
     */
    toggleBackgroundSolidColor(toggle) {
        let toggleValue = toggle.getElementsByClassName('js-toggle-btn')[0].dataset.toggleValue;

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
     * Устанавливает обработчики событий.
     */
    setHandlers() {

        // Устанавливает обработчики событий на выбираемые фоновые изображения
        let bcgImgWrapper = this.page.content.getElementsByClassName('js-settings-service-appearance-img-wrapper'),
            bcgImgSolidColorToggle = this.page.content.getElementsByClassName('js-settings-service-appearance-img-solid-color-toggle')[0]
        for (let wrapper of bcgImgWrapper) {
            wrapper.onclick = () => this.changeBackgroundImage(wrapper, bcgImgSolidColorToggle);
        }

        // Устанавливает обработчик события на тумблер для выбора размытия фона
        let bcgImgBlurToggle = this.page.content.getElementsByClassName('js-settings-service-appearance-img-blur-toggle')[0];
        bcgImgBlurToggle.onclick = () => this.toggleBackgroundBlur(bcgImgBlurToggle);

        // Устанавливает обработчик события на тумблер для установки сплошного цвета в качестве фона
        bcgImgSolidColorToggle.onclick = () => this.toggleBackgroundSolidColor(bcgImgSolidColorToggle);
    }
}