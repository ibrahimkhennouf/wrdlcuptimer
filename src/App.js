import "./App.css";
import { BckGrounds } from "./BckGrounds";
import { TimeComp } from "./TimeComp";

function App() {
  return (
    <div className="App">
      <BckGrounds></BckGrounds>
      <div className="hedPc" id="hedPc">
        <h1>Time left until FIFA WORLD CUP QATAR 2022</h1>
        <div className="contairs">
          <TimeComp text="Days"></TimeComp>
          <TimeComp text="Hours"></TimeComp>
          <TimeComp text="Minutes"></TimeComp>
          <TimeComp text="Seconds"></TimeComp>
        </div>
      </div>
    </div>
  );
}

export default App;
