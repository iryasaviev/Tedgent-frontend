import { Subject } from './subject';

/**
 * Класс создания теста.
 */
export class TestCreate {

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
            event.code === 'Tab') {

            // &nbsp
            let inputWords = input.textContent.split(';');
            input.innerHTML = '';

            let range = new Range();
            range.setStart(input, 0);
            // range.setEnd(input, 0);

            input.setSelectionRange(0, 1);

            // https://overcoder.net/q/212217/сохранение-и-восстановление-позиции-каретки-для-contenteditable-div
            for (let wordWithSemicolon of inputWords) {
                for (let word of wordWithSemicolon.split(';')) {
                    word = word.replace(/\s+/g, '');
                    if (word !== " " && word !== ";" && word !== "") {
                        input.insertAdjacentHTML('beforeend', `<span>${word};</span>`);
                    }
                }
            }
        }
    }
}