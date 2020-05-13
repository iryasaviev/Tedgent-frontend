import { Subject } from './subject';

export class TestCreate {
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
}