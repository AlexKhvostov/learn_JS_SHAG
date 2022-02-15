// Задача 5
// Выведите на экран количество секунд, которое осталось до конца дня.

'user strict';

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1); // добавляем к текущей дате сутки
tomorrow.setHours(0, 0, 0, 0); // устанавливаем время доты на полночь текущего часового пояса

let now = new Date(); // текущее время и дата

console.log('tomorrow : ' + tomorrow);
console.log('now : ' + now);

console.log('Количество секунд, которое осталось до конца дня:');
console.log((tomorrow - now) / 1000);
