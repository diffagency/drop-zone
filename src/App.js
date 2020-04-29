import React, { useEffect, useState } from "react";
import _ from "lodash";
import CountDown from './CountDown';
import TimeUp from './TimeUp';

const App = () => {
  // convert two digit numbers to individual numbers 
  const getDigits = (n) => {
    return n.toString().split('').map(Number);
  };

  // To Calculate the time difference with curren time and provided date
  const calculateTimeDifference = () => {
    const date = "2020-05-14";
    const difference = +new Date(`${date} 24:00:00`) - +new Date();
    let timeLeft = {};

    // if difference found
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      // store days, hours, mins and seconds
      timeLeft = {
        dayArr : (days > 9 ? getDigits(days) : [0, days]),
        hourArr : (hours > 9 ? getDigits(hours) : [0, hours]),
        minArr : minutes > 9 ? getDigits(minutes) : [0, minutes],
        secondsArr : seconds > 9 ? getDigits(seconds) : [0, seconds],
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeDifference());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeDifference());
    }, 1000);
  });

  return (
    <div className="bg-cover">
      <div className="container">
        <div className="drop-box box1"><h3>DROP</h3></div>
        <div className="drop-box box2"><h3>ZONE</h3></div>

        <div className="main">
          <div className="row">
            <div className="col-12 main-text text-center">
              LEEZY BOOST 103
            </div>
          </div>
          {!_.isEmpty(timeLeft) ? <CountDown timeLeft={timeLeft} /> : <TimeUp /> }
          <div className="row">
            <div className="col-12 text-center">
              <h5>UNTIL DROP</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
