/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
    let isValidPassword = false;
    if (password.length < 7) {
        isValidPassword;
    } else {
        let upperCase = false;
        let numbers = false;
        for (let i = 0; i < password.length; i++) {
            let num = !isNaN(Number(password[i]));
            if (password[i] === password[i].toUpperCase() && !num) {
                upperCase = true;
            }
            if (num) {
                numbers = true;
            }
        }
        if (upperCase && numbers) {
            isValidPassword = true;
        }
    }
    return isValidPassword;
}

module.exports = validatePassword;
