const hamburger = document.querySelector(".hamburger");
const drawerMenu = document.querySelector(".js-drawer");
const overlay = document.querySelector(".js-overlay");

// ハンバーガーボタンがクリックされたらメニューとオーバーレイを開閉
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  drawerMenu.classList.toggle("active");
  overlay.classList.toggle("is-active");
});

// メニュー内リンクがクリックされたらメニューとオーバーレイを閉じる
document.querySelectorAll(".drawer-menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    drawerMenu.classList.remove("active");
    overlay.classList.remove("is-active");
  });
});

// オーバーレイがクリックされたらメニューとオーバーレイを閉じる
overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  drawerMenu.classList.remove("active");
  overlay.classList.remove("is-active");
});
