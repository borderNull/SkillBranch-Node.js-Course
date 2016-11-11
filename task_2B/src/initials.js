export default function initials(url) {

    const reg = new RegExp('(\\s*)?([a-z-а-я\x7f-\xff]*)?\'?(\\s*)?([a-z-а-я\x7f-\xff]*)?(\\s*)?([a-z-а-я\x7f-\xff]*)?(\\s*)?', 'i');
    const regDigits = new RegExp('([0-9_/])');
    const regWords = new RegExp('(\\S+)', 'g');
    let checkString = url.length;
    let checkDigits = url.match(regDigits);
    let checkWords = url.match(regWords);
    let name = url.match(reg)[2];
    let patronym = url.match(reg)[4];
    let surname = url.match(reg)[6];
    let fullName

    if (checkString < 1 || checkDigits || checkWords.length > 3) {

        return fullName = 'Invalid fullname';

    } else if (!patronym) {

        fullName = name;

    } else if (!surname) {

        let nameInit = name[0] + '.';
        fullName = patronym + ' ' + nameInit;

    } else {

        let nameInit = name[0].toUpperCase() + '. ';
        let patronymInit = patronym[0].toUpperCase() + '.';
        fullName = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase() + ' ' + nameInit + patronymInit;
    }

    return fullName;
}
