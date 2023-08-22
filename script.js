window.onload = function () {
  getName();

  const saveBtn = document.getElementById("saveBtn");
  const deleteBtn = document.getElementById("deleteBtn");
  saveBtn.onclick = saveName;
  deleteBtn.onclick = removeName;
};

const saveName = function () {
  const name = document.querySelector("form input").value;
  localStorage.setItem("name", name);
  getName();
};

const removeName = function () {
  localStorage.removeItem("name");
  getName();
};

const getName = function () {
  const h2 = document.querySelector("h2");
  const name = localStorage.getItem("name");
  if (name) {
    h2.innerText = `Bentornato ${name}`;
  } else {
    h2.innerText = ``;
  }
};

let currentTime = sessionStorage.getItem("cronometer") ? sessionStorage.getItem("cronometer") : 0;
let pause = true;

const timeContainer = document.querySelector("#timeContainer");

const cronometer = function () {};

window.addEventListener("DOMContentLoaded", () => {
  if (pause) {
    pause = false;

    setInterval(updateTime, 1000);
  }
});

const pad = function (unit) {
  return ("0" + unit).length > 2 ? unit : "0" + unit;
};

const updateTime = function () {
  if (pause === false) {
    currentTime++;

    sessionStorage.setItem("cronometer", currentTime);

    timeContainer.innerHTML = pad(currentTime);
  }
};
