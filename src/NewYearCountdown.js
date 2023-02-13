import React, { useState, useEffect } from "react";

function NewYearCountdown() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const targetDate = new Date("December 31, 2023 23:59:59");
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = targetDate - currentTime;
      setTimeLeft(timeDifference);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {timeLeft ? (
        <div>
          <p className="headline">Time until New Year 2024!🚀</p>

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
