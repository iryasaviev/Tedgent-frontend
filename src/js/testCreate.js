import { Delegation } from './delegation';
import { Fields } from './fields'

import { Subject } from './subject';
import { FileLoad } from './fileLoad';

import { Question } from './question';

/**
 * Класс создания теста.
 */
export class TestCreate {
    constructor(page) {
        this.page = page;

        this.attachments = [];
    }

    /**
     * Отвечает за выбор основного предмета теста.
     * 
     * @param {*} select 
     */
    selectSubject(select) {
        let selectOptionData = select.getElementsByClassName('select_hd-value')[0].dataset.selectOptionValue,
            logo = this.page.content.getElementsByClassName('js-test-subject-logo')[0],
            subjectCl = new Subject();

        for (let subject of subjectCl.list) {
            if (subject.num === selectOptionData) {
                if (!logo.classList.contains(subject.color)) {
                    logo.classList.add(subject.color);
                    logo.innerText = subjectCl.getShortName(subject.num);
                }
            }
            else {
                if (logo.classList.contains(subject.color)) {
                    logo.classList.remove(subject.color);
                }
            }
        }
    }

    /**
     * Выделяет ключевое слово.
     * Написанное слово выделяется после нажатия клавиш "Tab", "Space", "Enter".
     * 
     * @param {*} event 
     * @param {*} input
     */
    highlightKeyword(event, input) {

        // Проверят наличие ключевых слов в поле
        if (!this.checkKeywordsQuantity(input)) {
            if (event.code !== 'Backspace' && event.code !== 'Delete') {
                event.preventDefault();
            }
            return;
        }

        if (event.code === 'Space' ||
            event.code === 'Tab' ||
            event.code === 'Semicolon' ||
            event.code === 'Enter') {

            if (event.code === 'Space' || event.code === 'Enter' || event.code === 'Semicolon') {
                event.preventDefault();
            }

            let inputWords = input.textContent.split(';');

            input.innerHTML = '';

            for (let wordWithSemicolon of inputWords) {
                for (let word of wordWithSemicolon.split(';')) {
                    word = word.replace(/\s+/g, '');

                    if (word !== ";" && word !== "") {
                        input.insertAdjacentHTML('beforeend', `<span class="keyword js-test-create-keyword" data-test-keyword-value="${word}">${word};</span>`);
                    }
                }
            }

            if (input.textContent.trim().length > 0) {
                let range = new Range();
                range.setStartAfter(input.lastElementChild);
                range.collapse(true);

                let selection = document.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }
    }

    /**
     * Проверяет наличие ключевых слов в поле для ввода.
     * Возвращает true - если количество слов меньше 5 и false, если больше или равно. 
     * 
     * @param {*} input поле для ввода.
     */
    checkKeywordsQuantity(input) {
        if (input.getElementsByClassName('js-test-create-keyword').length >= 5) {
            return false;
        }
        return true;
    }

    /**
     * Добавляет вложения.
     */
    uploadAttachment(event) {
        let fileLoadCl = new FileLoad(),
            files = fileLoadCl.readFile(event),
            wrapper = document.getElementsByClassName('js-test-create-attachments-files')[0];

        for (let file of files) {
            if (this.attachments.length >= 5) {
                this.page.messageCl.show('Ошибка! Количество вложений не может быть больше 5.');
                return;
            }

            this.attachments[this.attachments.length] = file;

            // Если вложенный файл является изображеним, то выводится его превью,
            // если нет, то иконка
            let attachmentLogo;
            if (file.type && file.type.indexOf('image') !== -1) {
                attachmentLogo = `<img class="test-attachments-file--img" src="">`;
            }
            else {
                attachmentLogo = `<span class="i-file icon"></span>`;
            }

            wrapper.insertAdjacentHTML('afterbegin',
                `<div class="test-attachments-file test-create-attachments-file js-test-create-attachment">
                    ${attachmentLogo}
                    <div class="test-attachments-file-info">
                        <a class="link js-test-create-attachment-name" title="${file.name}">${file.name}</a>
                        <span class="size">${fileLoadCl.convertBytesToKilobytes(file.size)} KB</span>
                    </div>
                    <button class="i-cross btn delete js-test-create-attachment-delete-btn"></button>
                </div>`);


            let attachment = wrapper.getElementsByClassName('js-test-create-attachment')[0],
                delBtn = attachment.getElementsByClassName('js-test-create-attachment-delete-btn')[0];

            // Если прикрепленный файл является изображением, вешается обработчик события загрузки файла 
            if (file.type && file.type.indexOf('image') !== -1) {
                fileLoadCl.readImage(file, this.showImage, {
                    attachmentTag: attachment,
                    photoFramCl: this.page.photoFrameCl
                });
            }

            delBtn.onclick = () => this.deleteAttachment(attachment);
        }
    }

    /**
     * Выводит превью изображения вложения и вешает обработчик.
     * Срабатывает после загрузки файла.
     * 
     * @param {*} path путь к загруженному изображению.
     * @param {*} params передаваемые параметры.
     */
    showImage(path, params) {
        const img = params.attachmentTag.getElementsByClassName('test-attachments-file--img')[0];

        img.src = path;
        img.onclick = () => params.photoFramCl.showOrCloseFrame(path);
    }

    /**
     * Удаляет вложение.
     * 
     * @param {*} attachment 
     */
    deleteAttachment(attachment) {
        let i = 0;
        for (let file of this.attachments) {
            let attachmentName = attachment.getElementsByClassName('js-test-create-attachment-name')[0].innerText;

            if (file.name === attachmentName) {
                attachment.remove();
                this.attachments.splice(i, 1);
                break;
            }
            i++;
        }
    }

    setHandlers() {
        const questionCl = new Question(this.page);
        questionCl.setHandlers();

        const testCreateSubjectSelect = this.page.content.getElementsByClassName('js-test-create-subject-select')[0];
        if (testCreateSubjectSelect !== undefined) {
            testCreateSubjectSelect.onclick = () => this.selectSubject(testCreateSubjectSelect);
        }

        const testCreateKeywordsInput = this.page.content.getElementsByClassName('js-test-create-kewords-inp')[0];
        if (testCreateKeywordsInput !== undefined) {
            testCreateKeywordsInput.onkeyup = (event) => this.highlightKeyword(event, testCreateKeywordsInput);
            testCreateKeywordsInput.onkeydown = (event) => this.highlightKeyword(event, testCreateKeywordsInput);
        }

        const testCreateAttchmentsInput = this.page.content.getElementsByClassName('js-test-create-attachments-inp')[0];
        if (testCreateAttchmentsInput !== undefined) {
            testCreateAttchmentsInput.onchange = (event) => this.uploadAttachment(event, testCreateAttchmentsInput);
        }
    }
}