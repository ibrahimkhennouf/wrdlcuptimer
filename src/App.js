import "./App.css";
import { BckGrounds } from "./BckGrounds";
import { TimeComp } from "./TimeComp";
import "./utils.js";
import { chngday, chngHour, chngSec, chngMin } from "./utils.js";
import { useState } from "react";

function App() {
  let [time, setTime] = useState({
    seconds: chngSec(),
    minutes: chngMin(),
    hours: chngHour(),
    days: chngday(),
  });
  setInterval(() => {
    setTime({
      seconds: chngSec(),
      minutes: chngMin(),
      hours: chngHour(),
      days: chngday(),
    });
  }, 1000);
  return (
    <div className="App">
      <BckGrounds></BckGrounds>
      <div className="hedPc" id="hedPc">
        <h1>Time left until FIFA WORLD CUP QATAR 2022</h1>
        <div className="contairs">
          <TimeComp text="Days" obj={time.days}></TimeComp>
          <TimeComp text="Hours" obj={time.hours}></TimeComp>
          <TimeComp text="Minutes" obj={time.minutes}></TimeComp>
          <TimeComp text="Seconds" obj={time.seconds}></TimeComp>
        </div>
      </div>
    </div>
  );
}

export default App;
