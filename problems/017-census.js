/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
    let arrAge = list.map((l) => l.age);
    let maxAge = Math.max(...arrAge);
    return (
        list.findIndex((l) => {
            if (l.gender === "Female") {
                return undefined;
            }
            return l.age === maxAge && l.gender === "Male";
        }) + 1
    );
}

module.exports = census;
