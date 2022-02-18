let addZr = (x) => {
  return x < 10 ? "0" + x : x;
};

let init = () => {
  let now = new Date().getTime();
  let countDownDate = new Date("November 21, 2022").getTime();
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
