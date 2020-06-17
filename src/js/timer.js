/**
 * Класс содержащий методы для работы с таймерами.
 */
export class Timer {
    countDown(initialValue, finishValue = 0) {
        if (initialValue === finishValue) {
            return initialValue;
        }

        initialValue -= 1;

        return initialValue;
    }
}