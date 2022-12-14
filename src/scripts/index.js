import "../styles/main.scss";
import "babel-polyfill";

const modal = document.getElementById("myModal");
let promiseOfModal = new Promise(function (resolve) {
  window.setTimeout(function () {
    resolve(modal);
  }, 1000 * 60);
});

promiseOfModal.then(function (val) {
  console.log("User has been on the page for 60 seconds");
  val.style.display = "block";
});

modal.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "close":
    case "modal":
      modal.style.display = "none";
      break;
  }
});

// Animations End

const continueBtn = document.getElementById("continue");
continueBtn.addEventListener("mouseover", () => {
  animationFinished();
});

const animationFinished = async () => {
  const animationbtn = await animationEndBtn(continueBtn);
  animationbtn.classList.add("btn-info");
  alert("Please click to continue");
};

const animationEndBtn = (el) => {
  return new Promise((resolve) => {
    el.addEventListener("animationend", () => {
      resolve(el);
    });
  });
};
