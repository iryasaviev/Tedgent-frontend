import { SettingsContent } from './settingsContent';

import { ServiceSettings } from './serviceSettings';

export class Settings {
    constructor(page) {
        this.page = page;
    }

    checkAndRunPage(pageNum) {
        let content;

        switch (pageNum) {
            case '5':
                content = new SettingsContent().getAccountSettingsPage();
                break;

            case '6':
                content = new SettingsContent().getServiceSettingsPage();
                break;
        }

        let body = this.page.body.getElementsByClassName('js-settings-bd')[0];
        body.innerHTML = content;
    }

    /**
     * Устанавливает обработчики событий.
     */
    setHandlers() {
        let pivotMenu = this.page.body.getElementsByClassName('js-settings-pivot-menu')[0],
            pivotMenuBtns = pivotMenu.getElementsByClassName('js-settings-pivot-menu-btn');

        for (let pivotMenuBtn of pivotMenuBtns) {
            pivotMenuBtn.onclick = () => this.checkAndRunPage(pivotMenuBtn.dataset.linkBtnPageNum);
        }

        // if (this.page.num === '6') {
        //     new ServiceSettings(this.page).setHandlers();
        // }
    }
}