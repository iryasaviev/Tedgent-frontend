export class ServiceSettings {
    constructor(page) {
        this.page = page;
    }

    /**
     * Изменяет фоновое изображение.
     * 
     * @param {object} imgWrapper родительский блок выбранного изображения.
     */
    changeBackgroundImage(imgWrapper) {
        const img = imgWrapper.getElementsByClassName('js-settings-service-appearance-img')[0],
            imgNum = imgWrapper.dataset.backgroundImgNum;

        let bcgSelector = `bd_bcg-${imgNum}`;

        for (let num = 1; 6 >= num; num++) {
            if (this.page.backgroundImg.classList.contains(`bd_bcg-${num}`)) {
                this.page.backgroundImg.classList.remove(`bd_bcg-${num}`);
            }
        }

        this.page.backgroundImg.classList.add(bcgSelector);

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
     * Устанавливает обработчики событий.
     */
    setHandlers() {

        // Устанавливает обработчики событий на выбираемые фоновые изображения
        let bcgImgWrapper = this.page.content.getElementsByClassName('js-settings-service-appearance-img-wrapper');
        for (let wrapper of bcgImgWrapper) {
            wrapper.onclick = () => this.changeBackgroundImage(wrapper);
        }

        // Устанавливает обработчик события на тумблер для выбора размытия фона
        let bcgImgBlurToggle = this.page.content.getElementsByClassName('js-settings-service-appearance-img-blur-toggle')[0];
        bcgImgBlurToggle.onclick = () => this.toggleBackgroundBlur(bcgImgBlurToggle);
    }
}