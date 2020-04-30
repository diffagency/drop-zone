import React from "react";
import moment from "moment";

export class CountDownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
      timer: "",
    };
  }

  displayCountDownTimer = () => {
    const interval = setInterval(() => {
      const countdownDate = moment(new Date("04/30/2020"));
      const now = moment().format();
      const diffDuration = moment.duration(countdownDate.diff(now));
      const days =
        countdownDate.diff(now, "days") < 10
          ? "0" + countdownDate.diff(now, "days")
          : countdownDate.diff(now, "days");
      const hours =
        diffDuration.hours() < 10
          ? "0" + diffDuration.hours()
          : diffDuration.hours();
      const minutes =
        diffDuration.minutes() < 10
          ? "0" + diffDuration.minutes()
          : diffDuration.minutes();
      const seconds =
        diffDuration.seconds() < 10
          ? "0" + diffDuration.seconds()
          : diffDuration.seconds();
      this.setState({ days, hours, minutes, seconds });

      if (diffDuration < 0) {
        clearInterval(interval);
        this.setState({
          timer: "Timer Expired",
        });
      }
    }, 1000);
  };

  componentDidMount() {
    this.displayCountDownTimer();
  }

  render() {
    const { days, hours, minutes, seconds, timer } = this.state;

    return (
      <section className="c-countdown-timer-wrapper">
        <h1>LEEZY BOOST 103</h1>
        {timer ? (
          timer
        ) : (
          <div className="c-countdown">
            <div className="c-countdown-item">
              <h3>
                <span>{days.toString()[0]}</span>
                <span>{days.toString()[1]}</span>
              </h3>
              <p>{days > 1 ? "days" : "day"}</p>
            </div>
            <div className="c-countdown-item">
              <h3>
                <span>{hours.toString()[0]}</span>
                <span>{hours.toString()[1]}</span>
              </h3>
              <p>{hours > 1 ? "hours" : "hour"}</p>
            </div>
            <div className="c-countdown-item">
              <h3>
                <span>{minutes.toString()[0]}</span>
                <span>{minutes.toString()[1]}</span>
              </h3>
              <p>{minutes > 1 ? "mins" : "min"}</p>
            </div>
            <div className="c-countdown-item">
              <h3>
                <span>{seconds.toString()[0]}</span>
                <span>{seconds.toString()[1]}</span>
              </h3>
              <p>{seconds > 1 ? "secs" : "sec"}</p>
            </div>
          </div>
        )}
        <p className="c-countdown-timer--drop-text">Until Drop</p>
      </section>
    );
  }
}
