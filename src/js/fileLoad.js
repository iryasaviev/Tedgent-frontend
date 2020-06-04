export class FileLoad {
    readFile(event) {
        // https://web.dev/read-files/
        return event.target.files;
    }

    readImage(file) {
        if (file.type && file.type.indexOf('image') === -1) {
            // ToDo: реализовать вывод ошибки.
            console.log('File is not an image.', file.type, file);
            return;
        }

        const reader = new FileReader();

        let result = '';

        // Метод не закончен
        reader.onload = (event) => {
            event.target.result;
        };
        reader.readAsDataURL(file);

        return result;
    }
}