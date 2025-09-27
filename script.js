// Header скролл
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Переход на другие страницы
document.getElementById("vespucci-cover").addEventListener("click", function () {
  window.location.href = "./vespuccisunset/index.html";
});

document.getElementById("tenkai-cover").addEventListener("click", function () {
  window.location.href = "./tenkai/index.html";
});

document.getElementById("rassekaurock-cover").addEventListener("click", function () {
  window.location.href = "./rassekaurock/index.html";
});

// Плавное появление релизов и площадок
window.addEventListener("scroll", () => {
  const title = document.querySelector(".releases-title");
  const musics = document.querySelector(".musics");
  const platforms = document.querySelector(".platforms-wrapper");

  const scrollPosition = window.scrollY;

  if (scrollPosition < 50) {
    title.classList.remove("show-on-scroll");
    musics.classList.remove("show-on-scroll");
    platforms.classList.remove("show-on-scroll");
  } else {
    title.classList.add("show-on-scroll");
    musics.classList.add("show-on-scroll");
    platforms.classList.add("show-on-scroll");
  }
});

// Кнопка-скролл к релизам
const scrollButton = document.getElementById("scrollToReleases");

window.addEventListener("scroll", () => {
  if (window.scrollY < 50) {
    scrollButton.classList.add("visible");
  } else {
    scrollButton.classList.remove("visible");
  }
});

scrollButton.addEventListener("click", () => {
  const releasesSection = document.getElementById("releases");
  if (releasesSection) {
    releasesSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

// Кнопки становятся больше
const platforms = document.querySelectorAll(".platform");

platforms.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    platforms.forEach((b) => {
      if (b !== btn) {
        b.style.opacity = "0.5";
        b.style.transform = "scale(1)";
      } else {
        b.style.opacity = "1";
        b.style.transform = "scale(1.05)";
      }
    });
  });

  btn.addEventListener("mouseleave", () => {
    platforms.forEach((b) => {
      b.style.opacity = "1";
      b.style.transform = "scale(1)";
    });
  });
});

// Анимация
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".about").classList.add("animate-about");
  }, 100);
});

// Инициализация скролла при загрузке
window.dispatchEvent(new Event("scroll"));