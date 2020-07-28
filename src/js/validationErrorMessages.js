export class ValidationErrorMessages {

    /**
     * Возвращает текст ошибки.
     * 
     * @param {string} errorNum номер ошибки. 
     */
    getText(errorNum) {
        switch (errorNum) {

            // Пустое поле
            case '1':
                return 'Это поле не может быть пустым.';

            // Поле может содержать только цифры
            case '2':
                return 'Это поле может содержать только цифры.';

            // Неверный формат электронной почты
            case '3':
                return 'Адрес электронной почты введён неверно. Пример: text@domani.com';

            // Адрес электронной почты уже занят
            case '4':
                return 'Адрес электронной почты уже есть в базе.';

            // Пароль
            case '5':
                return 'Пароль должен быть на латинице, содержать минимум одну цифру и иметь длину не менее 8 символов.';

            // Неверно введенное имя пользователя
            case '6':
                return 'Имя пользователя может быть написано только на латинице, содержать цифры и иметь длину от 5 до 20 символов.';

            // Имя пользователя занято
            case '7':
                return 'Имя пользователя занято.';
        }
    }
}