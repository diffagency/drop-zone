let future_date = new Date();
future_date.setDate(future_date.getDate() + 13);
future_date.setHours(future_date.getHours() + 8);
future_date.setMinutes(future_date.getMinutes() + 12);
future_date.setSeconds(future_date.getSeconds() + 7);

//counter function starts

const countdown = () =>{
const current_date = new Date();
const timer_gap = future_date - current_date;

const count_sec = 1000;
const count_min = count_sec * 60;
const count_hours = count_min * 60;
const count_days = count_hours * 24;

//calculate number of days,hours,minutes,secs left

const count_days_left = String(Math.floor(timer_gap / count_days)).padStart(2,0);;
const count_days_digits = count_days_left.split("");
const count_days_digits_one = count_days_digits[0];
const count_days_digits_two = count_days_digits[1]; 

const count_hours_left = String(Math.floor((timer_gap % count_days) / count_hours)).padStart(2,0);;
const count_hours_digits = count_hours_left.split("");
const count_hours_digits_one = count_hours_digits[0];
const count_hours_digits_two = count_hours_digits[1]; 

const count_min_left = String(Math.floor((timer_gap % count_hours) / count_min)).padStart(2,0);
const count_min_digits = count_min_left.split("");
const count_min_digits_one = count_min_digits[0];
const count_min_digits_two = count_min_digits[1];

const count_sec_left = String(Math.floor((timer_gap % count_min) / count_sec)).padStart(2,0);
const count_sec_digits = count_sec_left.split("");
const count_sec_digits_one = count_sec_digits[0];
const count_sec_digits_two = count_sec_digits[1];

document.querySelector('.timer-day').innerHTML = `<span class="timer_style"> ${count_days_digits_one}</span> <span class="timer_style">${count_days_digits_two} </span>`;
document.querySelector('.timer-hour').innerHTML = `<span class="timer_style"> ${count_hours_digits_one}</span> <span class="timer_style">${count_hours_digits_two} </span>`;
document.querySelector('.timer-minute').innerHTML = `<span class="timer_style"> ${count_min_digits_one}</span> <span class="timer_style">${count_min_digits_two} </span>`;
document.querySelector('.timer-sec').innerHTML = `<span class="timer_style"> ${count_sec_digits_one}</span> <span class="timer_style">${count_sec_digits_two} </span>`;

};

setInterval(countdown,1000);




