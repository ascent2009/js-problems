/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let shiftedLetters = letters.substring(1);
    shiftedLetters += letters.substring(0, 1);
    let shiftedString = "";
    for (let i = 0; i < secret.length; i++) {
        let idx = letters.indexOf(secret[i]);
        shiftedString += shiftedLetters[idx];
    }

    return shiftedString.includes("undefined")
        ? shiftedString.replaceAll("undefined", " ")
        : shiftedString;
}

module.exports = decrypt;
