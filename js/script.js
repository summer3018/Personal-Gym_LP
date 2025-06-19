const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".js-drawer");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".drawer-menu-link").forEach(function (link) {
  link.addEventListener("click", function () {
    // ハンバーガーボタンから active を外す
    document.querySelector(".hamburger").classList.remove("active");

    // ドロワーメニューから active を外す
    document.querySelector(".js-drawer").classList.remove("active");
  });
});

