import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
const formatTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  const hoursInString = hours.toString().padStart(2, "0");
  const minuteInString = minutes.toString().padStart(2, "0");
  const secondInString = seconds.toString().padStart(2, "0");

  return `${hoursInString}:${minuteInString}:${secondInString}`;
};

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const resetHandler = () => {
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let intervalId: number;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main className="dashboard-app-container">
        <h1>Stopwatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formatTime(time)}</h2>
            <button
              onClick={() => setIsRunning((prev) => !prev)}
              className={`isRunning ? "red" : "green"`}
            >
              {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={resetHandler}>Rest</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stopwatch;
