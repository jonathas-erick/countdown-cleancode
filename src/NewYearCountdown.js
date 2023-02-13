import React, { useState, useEffect } from "react";

function NewYearCountdown() {
  const [targetDate, setTargetDate] = useState(
    new Date("December 31, 2023 23:59:59")
  );
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = targetDate - currentTime;
      setTimeLeft(timeDifference);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputDate = new Date(event.target.elements.date.value);
    setTargetDate(inputDate);
  };

  return (
    <div>
      {timeLeft ? (
        <div>
          <p className="headline">Time until the selected date!🚀</p>

          <div className="form">
            <form onSubmit={handleSubmit}>
              <input type="datetime-local" name="date" />
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="container">
            <p>
              {Math.floor(timeLeft / 1000 / 60 / 60 / 24)} days{" "}
              {Math.floor(timeLeft / 1000 / 60 / 60) % 24} hours{" "}
              {Math.floor(timeLeft / 1000 / 60) % 60} minutes{" "}
              {Math.floor(timeLeft / 1000) % 60} seconds
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default NewYearCountdown;
