import { Page } from './page';

export class App {
    constructor() { }

    load() {
        new Page().runPageContent();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let app = new App().load();
});