import { ProfileContent } from './profileContent';

export class Profile {
    constructor(page) {
        this.page = page;

        this.contentCl = new ProfileContent();
    }

    /**
     * Отвечает за загрузку страницы.
     * 
     * @param {object} contentBd DOM элемент, в которое должно вставляться основное содержимое.
     */
    runPage(contentBd) {
        contentBd.innerHTML = this.contentCl.getPage();
    }
}