import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startEl = document.querySelector('[data-start]');
const datePickerEl = document.getElementById('datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let currentDate;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    let pickedDate = selectedDates[0].getTime();

    if (pickedDate < new Date().getTime()) {
      startEl.disabled = true
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startEl.disabled = false;
      startEl.addEventListener('click', () => {
        startEl.disabled = true;

        let timer = setInterval(() => {
          let currentDate = new Date().getTime();
          const difference = pickedDate - currentDate;

          let differenceToObject = convertMs(difference);

          daysEl.innerHTML = addLeadingZero(differenceToObject.days);
          hoursEl.innerHTML = addLeadingZero(differenceToObject.hours);
          minutesEl.innerHTML = addLeadingZero(differenceToObject.minutes);
          secondsEl.innerHTML = addLeadingZero(differenceToObject.seconds);

          if (difference-1000 <= 0) {
            clearInterval(timer);
            Notiflix.Notify.success('Countdown finished!');
            startEl.disabled = false;
          }
        }, 1000);
      });
    }
  },
};

flatpickr(datePickerEl, options);