let gameseq = [];
let userseq = [];
let level = 0;
let started = false;
let btns = ["blue", "green", "yellow", "violet"];
let score = 0;
let audio = document.querySelector("audio");

document.addEventListener("keydown", function () {
  if (started == false) {
    started = true;
    console.log("game is started");
  }
  levelUp();
});

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function displayscore() {
  let a = document.querySelector("h3");
  let newscore = document.createElement("h4");
  newscore.innerText = `Congratulations! Your score is :${score}`;
  a.append(newscore);
}
function call() {
  let body = document.querySelector("body");
  body.classList.add("flashbackground");
  setTimeout(function () {
    body.classList.remove("flashbackground");
    audio.play();
  }, 500);
}
function checkans(idx) {
  let head = document.querySelector("h3");
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      levelUp();
      score = score + 2;
    }
  } else {
    head.innerText = "Game Over! Press any Key to Start";

    displayscore();
    call();

    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
    score = 0;
  }
}

function levelUp() {
  userseq = [];
  level++;

  let a = document.querySelector("h3");
  a.innerText = `level:${level}`;
  //random button choose
  let b = Math.floor(4 * Math.random());
  let btn = document.querySelector(`.${btns[b]}`);
  console.log(`index ${b}`);
  console.log(`class ${btns[b]}`);
  gameseq.push(btns[b]);

  btnflash(btn);
}

function btnpress(btn) {
  let activebtn = btn;
  btnflash(activebtn);
  userseq.push(btn.getAttribute("id"));
  checkans(userseq.length - 1);
}
function btnpressfinal() {
  if (started == true) {
    let a = this;
    btnpress(a);
  }
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpressfinal);
}
