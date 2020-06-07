/**
 * Класс с методами для работы с элементами управления.
 */
export class Controls {

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
}