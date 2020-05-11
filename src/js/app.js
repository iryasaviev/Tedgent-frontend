import { Page } from './page';

export class App {
    constructor() { }

    load() {
        new Page().setHandlers();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let app = new App().load();
});