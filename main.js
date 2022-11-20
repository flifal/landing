let menu = document.getElementById("menu");
let closes = document.getElementById("close");
let mobileNav = document.getElementById("nav-mobile");
let bc = document.getElementById("back");
let li = document.getElementsByClassName("sd")[0].querySelectorAll(" li");
let lio = document.getElementsByClassName("sd")[1].querySelectorAll(" li");
let side = document.getElementById("side");
let sides = document.getElementById("sides");
menu.addEventListener("click", function () {
  bc.classList.toggle("back");
  mobileNav.classList.toggle("active");
});
closes.onclick = function () {
  bc.classList.toggle("back");
  mobileNav.classList.toggle("active");
  li.forEach((el) => el.classList.remove("fe"));
  lio.forEach((el) => el.classList.remove("fe"));
};
side.addEventListener("click", function () {
  li.forEach((el) => el.classList.toggle("fe"));
  // for (let i = 0; i < li.length; i++) {
  //   li[i].classList.toggle("fe");
  // }
});
sides.addEventListener("click", function () {
  lio.forEach((el) => el.classList.toggle("fe"));
  // for (let i = 0; i < li.length; i++) {
  //   li[i].classList.toggle("fe");
  // }
});
console.log(li);
