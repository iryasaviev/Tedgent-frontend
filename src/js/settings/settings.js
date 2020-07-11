import { ServiceSettings } from './serviceSettings';

export class Settings {
    constructor(page) {
        this.page = page;
    }

    /**
     * Устанавливает обработчики событий.
     */
    setHandlers() {
        new ServiceSettings(this.page).setHandlers();
    }
}