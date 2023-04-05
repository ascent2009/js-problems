/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    let pointsToNumbers = points.map((p) =>
        p.split("-").map((a) => parseInt(a))
    );
    let team1points = pointsToNumbers
        .map((a) => a[0])
        .reduce((acc, a) => acc + a);
    let team2points = pointsToNumbers
        .map((a) => a[1])
        .reduce((acc, a) => acc + a);
    if (team1points > team2points) {
        return 1;
    } else if (team1points < team2points) {
        return 2;
    } else {
        return undefined;
    }
}

module.exports = getWinner;
