function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Q1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDay() {
  let day;
  for (let index = 0; index < dezDaysList.length; index += 1) {
    day = document.createElement('li');
    day.innerText = dezDaysList[index];
    day.className = "day";
    document.getElementById('days').appendChild(day);
  }
}

createDay();

// Q2
function holidays(string) {
  let btnHoliday = document.createElement('button');
  btnHoliday.innerText = string;
  btnHoliday.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(btnHoliday)
}

holidays('Feriados');

// Q3
document.querySelector('#btn-holiday').addEventListener('click', function() {
  let holidays = document.querySelectorAll('.holiday');
  for (let i = 0; i < holidays.length; i += 1) {
    if (holidays[i].style.backgroundColor !== 'lightgreen') {
      holidays[i].style.backgroundColor = 'lightgreen';
    } else {
      holidays[i].style.backgroundColor = null;
    }
  }
});

// Q4
function fridays(string) {
  let btnFridays = document.createElement('button');
  btnFridays.innerText = string;
  btnFridays.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(btnFridays)
}

fridays('Sexta-feira');

// Q5
function changeFridays() {
  let fridays = document.querySelectorAll('.day');
  let friday = 'Sexta-feira';
  for (let i = 5; i < fridays.length; i += 7) {
    if (fridays[i].innerText === friday) {
      fridays[i].innerText = dezDaysList[i];
      console.log(fridays[i]);
    } else {
      fridays[i].innerText = friday;
    }
  }
}

document.querySelector('#btn-friday').addEventListener('click', changeFridays);

// Q6
let monthDays = document.getElementById('days');

function zoomOver(element) {
  let targetElement = element.target.tagName.toLowerCase();
  if (targetElement === 'li') {
    element.target.style.fontSize = 40 + 'px';
  }


}

function zoomOut(element) {
  element.target.style.fontSize = null;
}

monthDays.addEventListener('mouseover', zoomOver);
monthDays.addEventListener('mouseout', zoomOut);

// Q7
let newTask = document.createElement('span');
newTask.className = 'new-task';
document.querySelector('.my-tasks').appendChild(newTask);