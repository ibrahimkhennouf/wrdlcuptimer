let fnc = () => {
  let countDownDate = new Date("November 21, 2022").getTime();

  let spSec = document.querySelector("#Seconds");

  let spMin = document.querySelector("#Minutes");

  let spHr = document.querySelector("#Hours");

  let spDys = document.querySelector("#Days");

  let hndlr = () => {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    spDys.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
    spHr.textContent = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    spMin.textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    spSec.textContent = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
    }
  };
  setInterval(hndlr, 1000);
};

window.onload = fnc;
