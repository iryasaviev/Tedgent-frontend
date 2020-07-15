export class PageTitles {

    /**
     * Возвращает заголовок страницы.
     * 
     * @param {string} pageNum номер страницы.
     */
    getTitle(pageNum) {

        switch (pageNum) {
            case '1':
                return 'Профиль';

            case '2':
                return 'Тесты';

            case '3':
                return 'Создание теста';

            case '4':
                return 'Тест';

            case '5':
                return 'Результат теста';

            case '6':
                return 'Настройки аккаунта';

            case '7':
                return 'Настройки сервиса';
        }
    }
}