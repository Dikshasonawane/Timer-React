import React, { useEffect, useState } from "react";

const Timer = () => {
  const [isActive, setiIsActive] = useState(false);
  const [ispaused, setisPaused] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && ispaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, ispaused]);

  const handleStart = () => {
    setiIsActive(true);
    setisPaused(false);
  };

  const handlePaused = () => {
    setisPaused(!ispaused);
  };

  const handleReset = () => {
    setiIsActive(false);
    setTime(0);
  };

  const handlebtn = () => {
    isActive ? handlePaused() : handleStart();
  };

  return (
    <div>
      <div>
        <h1 className="text">STOPWATCH</h1>
      </div>
      {console.log("time", time)}

      <div>
        <div className="item">
          <h1 className="fontsize">
            <p className="justify-around">
              {("" + (Math.floor(time / 60000) % 60)).slice(-2)}
            </p>
          </h1>
          <sub>m</sub>&nbsp;&nbsp;&nbsp;
          <h1 className="fontsize">
            <p className="justify-around">
              {("" + (Math.floor(time / 1000) % 60)).slice(-2)}
            </p>
          </h1>
          <sub>s</sub>&nbsp;&nbsp;&nbsp;
          <h1>
            <p className="justify-around">
              {("" + (Math.floor(time / 10) % 100)).slice(-2)}
            </p>
          </h1>
        </div>
      </div>

      <div className="btn">
        <button className="btn1" onClick={handlebtn}>
          {isActive ? "STOP" : "START"}
        </button>
        <button className="btn2" onClick={handleReset}>
          RESET
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Timer;
