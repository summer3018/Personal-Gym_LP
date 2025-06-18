document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".js-drawer");

  if (!hamburger || !navMenu) return;

  // ハンバーガークリックで開閉
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // メニュー内リンクをクリックしたら閉じる
  document.querySelectorAll(".drawer-menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
});
