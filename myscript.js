/* Diff Countdown Mock JS script, Jordan Waldron, Nov 2021
  Js Script to run the countdown timer */

//Set the Date to countdown to. 
var targetDate = new Date("2022-2-30").getTime();

/* Updates every second until countdown is complete*/
var countdown = setInterval(function(){
  var currDate = new Date().getTime();
  var timeLeft = targetDate - currDate;

  /* converts computer date values into readable days,hours,mins,secs */
  var daysNum = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hoursNum = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minsNum = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var secsNum = Math.floor((timeLeft % (1000 * 60)) / 1000);

  //console.log(daysNum, hoursNum,minsNum, secsNum);
  //console.log(minsNum, secsNum);

  /* Arrays storing digits for countdown.
     Checks is digit is > 9, if so it calls function numSplitFun to break two digit number into two single digit numbers or if the number is < 9 it adds a leading zero*/
  var daysSplit = daysNum > 9 ? numSplitFun(daysNum) : [0, daysNum];
  var hoursSplit = hoursNum > 9 ? numSplitFun(hoursNum) : [0, hoursNum];
  var minsSplit = minsNum > 9 ? numSplitFun(minsNum) : [0, minsNum];
  var secsSplit = secsNum > 9 ? numSplitFun(secsNum) : [0, secsNum];

  // console.log(daysNum,hoursNum,minsNum, secsNum);
  // console.log(daysSplit,hoursSplit, secsSplit);

  /*Function takes a two digit number and split into two single digit numbers.
    Saves the two vaules as an Int into an array */
  function numSplitFun(x){
    var output = [];
    var outputstr = x.toString();

    for(var i = 0, len = outputstr.length; i < len; i ++){
      output.push(parseInt(outputstr.charAt(i)));
    }
    return output;
  };
  
  /* Pushes saved time values into HTML */
  document.getElementById("days-num1").innerHTML = daysSplit[0];
  document.getElementById("days-num2").innerHTML = daysSplit[1];

  document.getElementById("hours-num1").innerHTML = hoursSplit[0];
  document.getElementById("hours-num2").innerHTML = hoursSplit[1];

  document.getElementById("mins-num1").innerHTML = minsSplit[0];
  document.getElementById("mins-num2").innerHTML = minsSplit[1];

  document.getElementById("secs-num1").innerHTML = secsSplit[0];
  document.getElementById("secs-num2").innerHTML = secsSplit[1];

  /* If the count-down finishes Time Expired will display */
  if(timeLeft < 0){
    clearInterval(countdown);
    document.getElementById("days-num1").innerHTML = 0
    document.getElementById("days-num2").innerHTML = 0
    document.getElementById("hours-num1").innerHTML = 0
    document.getElementById("hours-num2").innerHTML = 0
    document.getElementById("mins-num1").innerHTML = 0
    document.getElementById("mins-num2").innerHTML = 0
    document.getElementById("secs-num1").innerHTML = 0
    document.getElementById("secs-num2").innerHTML = 0
    alert("TIME EXPIRED");
  }
}, 1000);