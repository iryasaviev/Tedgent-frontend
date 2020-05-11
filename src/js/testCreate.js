import { Subject } from './subject';

export class TestCreate {
    selectSubject(select) {
        let selectOptionData = select.getElementsByClassName('select_hd-value')[0].dataset.selectOptionValue,
            logo = document.getElementById('bodyContent').getElementsByClassName('js-test-subject-logo')[0];

        for (let subject of new Subject().list) {
            if (subject.num === selectOptionData) {
                if (!logo.classList.contains(subject.color)) {
                    logo.classList.add(subject.color);
                }
            }
            else {
                if (logo.classList.contains(subject.color)) {
                    logo.classList.remove(subject.color);
                }
            }
        }
    }
}