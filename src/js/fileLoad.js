export class FileLoad {
    readFile(event) {
        // https://web.dev/read-files/
        return event.target.files;
    }

    readImage(file) {
        if (file.type && file.type.indexOf('image') === -1) {
            console.log('File is not an image.', file.type, file);
            return;
        }

        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            return event.target.result;
        })
        reader.readAsDataURL(file);
    }

}