/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    return (
        number
            .slice(0, 3)
            .split("")
            .map((n) => Number(n))
            .reduce((acc, a) => acc + a) ===
        number
            .slice(-3)
            .split("")
            .map((n) => Number(n))
            .reduce((acc, a) => acc + a)
    );
}

module.exports = checkTicket;
