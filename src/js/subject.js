export class Subject {
    constructor() {
        this.list = [
            {
                num: '0',
                name: 'Другой',
                color: 'subject-bcg-0'
            },
            {
                num: '1',
                name: 'Математика',
                color: 'subject-bcg-1'
            },
            {
                num: '2',
                name: 'Алгебра',
                color: 'subject-bcg-1-1'
            },
            {
                num: '3',
                name: 'Геометрия',
                color: 'subject-bcg-1-2'
            },
            {
                num: '4',
                name: 'Информатика',
                color: 'subject-bcg-1-3'
            },
            {
                num: '5',
                name: 'Родной язык',
                color: 'subject-bcg-2'
            },
            {
                num: '6',
                name: 'Чтение / Литература',
                color: 'subject-bcg-2-1'
            },
            {
                num: '7',
                name: 'Иностранный язык',
                color: 'subject-bcg-2-2'
            },
            {
                num: '8',
                name: 'География',
                color: 'subject-bcg-3'
            },
            {
                num: '9',
                name: 'Биология',
                color: 'subject-bcg-3-1'
            },
            {
                num: '10',
                name: 'Физика',
                color: 'subject-bcg-3-2'
            },
            {
                num: '11',
                name: 'Химия',
                color: 'subject-bcg-3-3'
            },
            {
                num: '12',
                name: 'Астрономия',
                color: 'subject-bcg-3-4'
            },
            {
                num: '13',
                name: 'История',
                color: 'subject-bcg-4'
            },
            {
                num: '14',
                name: 'Обществознание',
                color: 'subject-bcg-4-1'
            }
        ];
    }

    getShortName(subjectNum) {
        let result = '';

        if (subjectNum !== '0') {
            for (let subject of this.list) {
                if (subject.num === subjectNum) {
                    let subjectNameWords = subject.name.split(' ');

                    result = subjectNameWords[0].split('')[0];

                    if (subjectNameWords.length > 1) {
                        result += subjectNameWords[1].split('')[0];
                    }

                    return result;
                }
            }
        }

        return result;
    }
}