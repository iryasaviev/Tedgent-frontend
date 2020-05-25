import { Sidebar } from './sidebar';
import { Select } from './select';

import { TestCreate } from './testCreate';
import { MoreMenu } from './moreMenu';

export class Page {
    constructor() {
        this.body = document.getElementById('body');
        this.num = this.body.dataset.pageNum;
    }
    setHandlers() {
        switch (this.num) {
            // Profile page
            case '1':
                break;

            // Tests list page
            case '2':
                break;

            // Test create page
            case '3':
                let testCreateCl = new TestCreate(),
                    testCreateSubjectSelect = this.body.getElementsByClassName('js-test-create-subject-select')[0];

                if (testCreateSubjectSelect !== undefined) {
                    testCreateSubjectSelect.onclick = () => testCreateCl.selectSubject(testCreateSubjectSelect);
                }

                let testCreateKeywordsInput = this.body.getElementsByClassName('js-test-create-kewords-inp')[0];
                if (testCreateKeywordsInput !== undefined) {
                    testCreateKeywordsInput.onkeyup = (event) => testCreateCl.highlightKeyword(event, testCreateKeywordsInput);
                    testCreateKeywordsInput.onkeydown = (event) => testCreateCl.highlightKeyword(event, testCreateKeywordsInput);
                }
                break;
        }

        new Sidebar().setHandlers();
        new Select().setHandlers();
        new MoreMenu().setHandlers();
    }
}