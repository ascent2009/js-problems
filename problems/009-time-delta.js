/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeDelta(x, y) {
    let arrX = x.split(":").map((x) => Number(x));
    let arrY = y.split(":").map((y) => Number(y));
    let seconds = arrY[2] - arrX[2];
    let minutes = (arrY[1] - arrX[1]) * 60;
    let hours = (arrY[0] - arrX[0]) * 3600;
    return hours + minutes + seconds;
}

module.exports = getTimeDelta;
