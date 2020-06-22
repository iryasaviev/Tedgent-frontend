/**
 * Класс отвечающий за зазгрузку файлов.
 */
export class FileLoad {
    constructor() {
        this.bufferImagePath;
    }

    /**
     * Считывает и возвращает загруженный файл.
     * 
     * @param {*} event события.
     */
    readFile(event) {
        // https://web.dev/read-files/
        return event.target.files;
    }

    /**
     * Загружает и выводит изображание.
     * 
     * @param {*} file загруженный файл.
     * @param {*} loadFunc функция, которая вызываеся после загрузки изображения.
     * @param {*} loadFuncParams параметры вызываемой после загрузки функции.
     */
    readImage(file, loadFunc, loadFuncParams) {
        if (file.type && file.type.indexOf('image') === -1) {
            // ToDo: реализовать вывод ошибки.
            console.log('File is not an image.', file.type, file);
            return;
        }

        let reader = new FileReader();

        reader.onload = (event) => {
            loadFunc(event.target.result, loadFuncParams);
        }
        reader.readAsDataURL(file);
    }

    /**
     * Конвертирует байты в килобайты.
     * 
     * @param {number} bytes значение для конвертации.
     */
    convertBytesToKilobytes(bytes) {
        return Number(bytes) / 1000;
    }
}