
  const getDigits = (n) => {
    return n.toString().split('').map(Number);
  };

  // Set the date we're counting down to
  const date = "2020-05-14";
  const countDownDate = new Date(`${date} 24:00:00`).getTime();
  
  // Update the count down every 1 second
  let x = setInterval(function() {
  
    // Get today's date and time
    const now = new Date().getTime();
    // Calculate the duration between now and the count down date
    const duration = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    const dayArr = days > 9 ? getDigits(days) : [0, days];
    const hourArr = hours > 9 ? getDigits(hours) : [0, hours];
    const minArr = minutes > 9 ? getDigits(minutes) : [0, minutes];
    const secondsArr = seconds > 9 ? getDigits(seconds) : [0, seconds];

    document.getElementById("day1").innerHTML = dayArr[0];
    document.getElementById("day2").innerHTML = dayArr[1];
    
    document.getElementById("hour1").innerHTML = hourArr[0];
    document.getElementById("hour2").innerHTML = hourArr[1];
    
    document.getElementById("min1").innerHTML = minArr[0];
    document.getElementById("min2").innerHTML = minArr[1];
    
    document.getElementById("sec1").innerHTML = secondsArr[0];
    document.getElementById("sec2").innerHTML = secondsArr[1];
    
    // If the count down is over, write some text 
    if (duration < 0) {
      clearInterval(x);
      // This will replace the current count-down-timer withe the text on duration end
      document.getElementById("count-down-timer").innerHTML = "EXPIRED";
    }
	}, 1000);