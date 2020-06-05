export class FileLoad {
    constructor() {
        this.bufferImagePath;
    }

    readFile(event) {
        // https://web.dev/read-files/
        return event.target.files;
    }

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
}