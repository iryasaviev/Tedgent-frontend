// Основные области
import { Sidebar } from './sidebar';
import { Select } from './select';
import { PhotoFrame } from './photoFrame';
import { MoreMenu } from './moreMenu';
import { Message } from './message';
import { DialogWindow } from './dialogWindow';

// Элементы управления (кнопки, поля для ввода)
import { Controls } from './controls';
import { Fields } from './fields';

// Страницы
import { Profile } from './profile/profile';
import { TestCreate } from './test-сreate/testCreate';
import { Test } from './test/test';
import { AccountSettings } from './account-settings/accountSettings';
import { ServiceSettings } from './service-settings/serviceSettings';
import { Search } from './search/search';

// Для страниц
import { PageTitles } from './pageTitles';

/**
 * Класс для работы со страницами.
 */
export class Page {
    constructor() {

        // Области
        this.body = document.getElementById('body');
        this.backgroundImg = this.body.getElementsByClassName('js-background-img')[0];
        this.content = document.getElementById('bodyContent');
        this.menu = this.body.getElementsByClassName('js-menu')[0];
        this.menuPageTitle = this.menu.getElementsByClassName('js-menu-page-title')[0];
        this.photoFrame = this.body.getElementsByClassName('js-photo-frame')[0];
        this.message = this.body.getElementsByClassName('js-message')[0];
        this.dialogWindow = this.body.getElementsByClassName('js-dialog-window')[0];

        // Для работы с областями
        this.selectCl = new Select();
        this.messageCl = new Message(this);
        this.dialogWindowCl = new DialogWindow(this);
        this.photoFrameCl = new PhotoFrame(this);

        // Для работы с элементами управления
        this.controlsCl = new Controls(this);
        this.fieldCl = new Fields(this);

        // Номер текущей страницы
        this.num = this.body.dataset.pageNum;
    }

    /**
     * Закрывает все активные всплывающие окна, селекты и подобные элементы по клику на body.
     * 
     * @param {object} event объект события.
     */
    closeWindows(event) {
        const items = this.body.getElementsByClassName('active'),
            itemsCount = items.length;

        for (let i = 0; itemsCount > i; i++) {
            if (!items[0].contains(event.target)) {
                items[0].classList.remove('active');
            }
        }
    }

    /**
     * Изменяет заголовок страницы в меню.
     * 
     * @param {string} pageNum номер страницы. 
     */
    changePageTitle(pageNum = this.num) {
        this.menuPageTitle.innerText = new PageTitles().getTitle(pageNum);
    }

    /**
     * Отвечает за переход на страницу.
     * 
     * @param {object} linkBtn кнопка-ссылка на которой произошел click.
     */
    goToPage(linkBtn) {
        let link = linkBtn.dataset.link,
            linkPageNum = linkBtn.dataset.linkPageNum;

        this.runPageContent(linkPageNum);
    }

    /**
     * Загружает содержимое страницы.
     * 
     * @param {string} pageNum номер страницы.
     */
    runPageContent(pageNum = this.num) {
        let contentBd = this.content.getElementsByClassName('js-content-bd')[0];

        // Изменяет номер страницы
        this.body.dataset.pageNum = pageNum;
        this.num = this.body.dataset.pageNum;

        // Определяет необходимый метод для активации по номеру страницу 
        switch (this.num) {

            case '0':
                break;

            // Profile page
            case '1':
                new Profile(this).runPage(contentBd);
                break;

            // Tests list page
            case '2':
                break;

            // Test create page
            case '3':
                new TestCreate(this).runPage(contentBd);
                break;

            // Test page
            case '4':
                new Test(this).runPage(contentBd);
                break;

            // Test result for creator page
            case '5':
                break;

            // Account settings page
            case '6':
                new AccountSettings(this).runPage(contentBd);
                break;

            // Service settings page
            case '7':
                new ServiceSettings(this).runPage(contentBd);
                break;

            // Search pge
            case '8':
                new Search(this).runPage(contentBd);
                break;
        }

        this.changePageTitle();
        this.setHandlers();
    }

    /**
     * Устанавливает обработчики событий.
     */
    setHandlers() {

        // Вешает обработчик события метода для открытия страницы на кнопки-ссылки
        let linkBtns = this.body.getElementsByClassName('js-link-btn');
        for (let linkBtn of linkBtns) {
            linkBtn.onclick = () => this.goToPage(linkBtn);
        }

        new Sidebar().setHandlers();
        this.selectCl.setHandlers();
        new MoreMenu().setHandlers();
        this.controlsCl.setHandlers();
        this.fieldCl.setHandlers();
        this.photoFrameCl.setHandlers();
        this.dialogWindowCl.setHandlers();

        this.body.onclick = (event) => this.closeWindows(event);
    }
}