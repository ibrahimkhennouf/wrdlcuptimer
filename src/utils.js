let addZr = (x) => {
  return x < 10 ? "0" + x : x;
};

let init = () => {
  let now = new Date().getTime();
  let countDownDate = new Date("November 21, 2021").getTime();
  if (countDownDate - now<0) {
  const myNode = document.getElementById("hedPc");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
  hed=document.createElement("h1");
  hed.innerText = "wold cup has started enjoy."
  myNode.appendChild(hed);
  }
  return countDownDate - now;
};

export let chngday = () => {
  return addZr(Math.floor(init() / (1000 * 60 * 60 * 24)));
};
export let chngHour = () => {
  return addZr(Math.floor((init() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
};
export let chngMin = () => {
  return addZr(Math.floor((init() % (1000 * 60 * 60)) / (1000 * 60)));
};
export let chngSec = () => {
  return addZr(Math.floor((init() % (1000 * 60)) / 1000));
};
