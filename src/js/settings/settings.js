import { ServiceSettings } from './serviceSettings';

export class Settings {
    constructor(page) {
        this.page = page;
    }

    /**
     * Устанавливает обработчики событий.
     */
    setHandlers() {
        if (this.page.num === '6') {
            new ServiceSettings(this.page).setHandlers();
        }
    }
}