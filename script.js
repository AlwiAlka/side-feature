/** @format */

const toggle = document.querySelector(".fa-arrow-right");
const siderBtn = document.querySelectorAll(".sider-btn");
const container = document.querySelector(".container-side");
console.log(siderBtn);

toggle.addEventListener("click", function () {
  siderBtn.forEach((sider) => {
    sider.classList.toggle("hide");
  });
  container.classList.toggle("autofit");
  toggle.classList.toggle("flip");
});
