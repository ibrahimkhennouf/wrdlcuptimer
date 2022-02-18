import "./TimeComp.css";

import "./utils.js";

export let TimeComp = (props) => {
  let { text, obj } = props;
  return (
    <div>
      <div className="flx">
        <div className="cont">
          <span>{obj}</span>
        </div>
        <span> {text} </span>
      </div>
    </div>
  );
};
