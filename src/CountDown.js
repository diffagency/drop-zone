import React from "react";

const CountDown = (props) => {
    const {timeLeft} = props;
    return (
        <div className="row justify-content-center count-down-timer">
            <div className="col-3 text-center">
                <span className="count-down-box" id="day1">{timeLeft.dayArr[0]}</span>
                <span className="count-down-box" id="day2">{timeLeft.dayArr[1]}</span>
                <h5><b>DAYS</b></h5>
            </div>
            <div className="col-3 text-center">
                <span className="count-down-box" id="hour1">{timeLeft.hourArr[0]}</span>
                <span className="count-down-box" id="hour2">{timeLeft.hourArr[1]}</span>
                <h5><b>HOURS</b></h5>
            </div>
            <div className="col-3 text-center">
                <span className="count-down-box" id="min1">{timeLeft.minArr[0]}</span>
                <span className="count-down-box" id="min2">{timeLeft.minArr[1]}</span>
                <h5><b>MINS</b></h5>
            </div>
            <div className="col-3 text-center">
                <span className="count-down-box" id="sec1">{timeLeft.secondsArr[0]}</span>
                <span className="count-down-box" id="sec2">{timeLeft.secondsArr[1]}</span>
                <h5><b>SECS</b></h5>
            </div>
        </div>
    );
}

export default CountDown;
