const countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 13);
countDownDate.setHours(countDownDate.getHours() + 08);
countDownDate.setMinutes(countDownDate.getMinutes() + 12);
countDownDate.setSeconds(countDownDate.getSeconds() + 07);

// Update the count down every 1 second
const down = setInterval(() => {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const format = (t) => {
    return t < 10 ? `<span class="first rozha">0</span> <span class="first sec rozha">${t}</span>`
      : `<span class="first rozha">${t.toString()[0]}</span> <span class="first sec rozha">${t.toString()[1]}</span>`;
  };

  // Display the result in the element with id="demo"
  document.getElementById("count").innerHTML = `
    <div class="block"> <p class="num">${format(days)}</p><span class="name transform letter family">days</span></div>
    <div class="block"> <p class="num">${format(hours)}<p><span class="name transform letter family">hours</span></div>
    <div class="block"> <p class="num">${format(minutes)}<p> <span class="name transform letter family">mins</span></div>
    <div class="block"> <p class="num">${format(seconds)}<p>  <span class="name transform letter family">secs</span></div>
  `;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(down);
    document.getElementById("count").innerHTML = "EXPIRED";
  }
}, 1000);