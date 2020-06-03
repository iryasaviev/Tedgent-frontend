import { Subject } from './subject';
import { FileLoad } from './fileLoad';
import { Message } from './message';

import { Question } from './question';

/**
 * Класс создания теста.
 */
export class TestCreate {
    constructor() {
        this.attachments = [];
    }

    /**
     * Отвечает за выбор основного предмета теста.
     * @param {*} select 
     */
    selectSubject(select) {
        let selectOptionData = select.getElementsByClassName('select_hd-value')[0].dataset.selectOptionValue,
            logo = document.getElementById('bodyContent').getElementsByClassName('js-test-subject-logo')[0],
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
     * Написанное слово выделяется если перед ним (без пробела) присутсвует знак "#", либо после нажатия клавиш "Tab", "Space", "Enter".
     */
    highlightKeyword(event, input) {
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
                        input.insertAdjacentHTML('beforeend', `<span class="keyword" data-test-keyword-value="${word}">${word};</span>`);
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
     * Добавляет вложения.
     */
    uploadAttachment(event) {
        let fileLoadCl = new FileLoad(),
            files = fileLoadCl.readFile(event),
            wrapper = document.getElementsByClassName('js-test-create-attachments-files')[0];

        for (let file of files) {
            if (this.attachments.length >= 5) {
                new Message().show('Ошибка! Количество вложений не может быть больше 5.');
                return;
            }

            this.attachments[this.attachments.length] = file;

            wrapper.insertAdjacentHTML('afterbegin',
                `<div class="test-create_bd-attachments-file js-test-create-attachment">
                <span class="i-file icon"></span>
                <span class="txt js-test-create-attachment-name">${file.name}</span>
                <button class="i-cross btn delete js-test-create-attachment-delete-btn"></button>
                </div>`);

            let attachment = wrapper.getElementsByClassName('js-test-create-attachment')[0],
                delBtn = attachment.getElementsByClassName('js-test-create-attachment-delete-btn')[0];

            delBtn.onclick = () => this.deleteAttachment(attachment);
        }
    }

    /**
     * Удаляет вложение.
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
        const questionCl = new Question();
        questionCl.setHandlers();
    }
}