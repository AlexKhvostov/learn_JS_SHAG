// Задача 2
// Узнайте, каким днем недели былл 10-го марта 2005 года

'user strict';
let march5 = new Date(2005, 2, 10).getDay();
console.log('10-го марта 2005 года был: ' + dayOfWeek(march5));

function dayOfWeek(x) {
  switch (x) {
    case 0:
      return 'Воскресенье';
    case 1:
      return 'Понедельник';
    case 2:
      return 'Вторник';
    case 3:
      return 'Среда';
    case 4:
      return 'Четверг';
    case 5:
      return 'Пятница';
    case 6:
      return 'Суббота';

    default:
      return 'error';
  }
}
