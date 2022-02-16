import "./TimeComp.css";
import "./utils";

export let TimeComp = (props) => {
  let { text } = props;
  return (
    <div>
      <div className="flx">
        <div className="cont">
          <span id={text}></span>
        </div>
        <span> {text} </span>
      </div>
    </div>
  );
};
