/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
    let uniqueValuesArr = [...new Set(value)];
    let shortenedString = uniqueValuesArr
        .map((u) => [value.split("").filter((v) => v === u).length, u])
        .flat()
        .join("")
        .replaceAll("1", "");

    return value === "false" ? "false" : shortenedString;
}

module.exports = rle;
