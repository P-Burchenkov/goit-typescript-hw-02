/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Friday',
  Sunday = 'Sunday'
}

function isDayoff(day: Week): boolean{
  if (day === Week.Saturday || day === Week.Monday) {
    return true;
  } else {return false}
}

