export class FileLoad {
    readFile(event, input) {
        // https://web.dev/read-files/
        return event.target.files;
    }
}