let addZr = (x) => {
  return x < 10 ? "0" + x : x;
};

let fnc = () => {
  let countDownDate = new Date("November 21, 2022").getTime();

  let spSec = document.querySelector("#Seconds");

  let spMin = document.querySelector("#Minutes");

  let spHr = document.querySelector("#Hours");

  let spDys = document.querySelector("#Days");

  let hndlr = () => {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    spDys.textContent = addZr(Math.floor(distance / (1000 * 60 * 60 * 24)));
    spHr.textContent = addZr(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    spMin.textContent = addZr(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    );
    spSec.textContent = addZr(Math.floor((distance % (1000 * 60)) / 1000));

    if (distance < 0) {
      let myNode = document.getElementById("hedPc");
      while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
      }
      let h = document.createElement("h1");
      h.innerText = "Time is UP enjoy watching the FIFA WORLD CUP QATAR 2022";
      myNode.appendChild(h);
    }
  };
  setInterval(hndlr, 1000);
};

window.onload = fnc;
