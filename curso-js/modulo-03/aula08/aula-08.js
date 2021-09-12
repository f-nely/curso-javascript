let day = 3;
let dayName = '';

switch(day) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 2:
    dayName = 'Wednesday';
    break;
  case 3:
    dayName = 'Thursday';
    break;
  case 4:
    dayName = 'Friday';
    break;
  case 5:
    dayName = 'Saturday';
    break;
  case 6:
    dayName = 'Sunday';
    break;
  default:
    dayName = 'Invalid day';
}

document.getElementById("day").innerHTML = "Today is: " + dayName;