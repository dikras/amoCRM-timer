const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const createTimerAnimator = () => {
  return (seconds) => {
    if (seconds > 0) {
      setInterval(() => {
        const timeSeconds = seconds % 60;;
        const timeMinutes = seconds / 60 % 60;
        const timeHours = seconds / 60 /60 % 60;
  
        const hoursZero = timeHours < 10 ? '0' : '';
        const minutesZero = timeMinutes < 10 ? '0' : '';
        const secondsZero = timeSeconds < 10 ? '0' : '';
  
        const timerTotal = `${hoursZero}${Math.trunc(timeHours)}:${minutesZero}${Math.trunc(timeMinutes)}:${secondsZero}${timeSeconds}`;
        timerEl.innerHTML = timerTotal;
  
        --seconds;
      }, 1000);
    } else {
      alert("Время закончилось");
    }
    
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^\d]/g,'');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
