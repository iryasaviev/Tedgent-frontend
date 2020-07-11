/**
 * Класс с методами для работы с элементами управления.
 */
export class Controls {
    constructor(page) {
        this.page = page;
    }

    /**
     * Отключает возможность взайимодествия с кнопкой.
     * 
     * @param {object} btn кнопка, которую нужно отключить.
     */
    disableButton(btn) {
        if (!btn.classList.contains('btn-disable')) {
            btn.classList.add('btn-disable');
        }

        if (!btn.hasAttribute('disabled')) {
            btn.setAttribute('disabled', '');
        }
    }

    /**
     * Включает возможность взайимодествия с кнопкой.
     * 
     * @param {object} btn кнопка, которую нужно включить.
     */
    enableButton(btn) {
        if (btn.classList.contains('btn-disable')) {
            btn.classList.remove('btn-disable');
        }

        if (btn.hasAttribute('disabled')) {
            btn.removeAttribute('disabled');
        }
    }

    /**
     * Изменяет состояние тумблера.
     * 
     * @param {object} toggle элемент.
     */
    switchToggle(toggle) {
        toggle.classList.toggle('toggle-active');

        let toggleBtn = toggle.getElementsByClassName('js-toggle-btn')[0];
        if (toggle.classList.contains('toggle-active')) {
            toggleBtn.dataset.toggleValue = 'true';
        }
        else {
            toggleBtn.dataset.toggleValue = 'false';
        }
    }

    /**
     * Устанавливает обработчики событий.
     */
    setHandlers() {

        // Устанавливает обработчики события на тумблеры
        let toggles = this.page.body.getElementsByClassName('js-toggle');
        for (let toggle of toggles) {
            let toggleBtn = toggle.getElementsByClassName('js-toggle-btn')[0];
            toggleBtn.onclick = () => this.switchToggle(toggle);
        }
    }
}