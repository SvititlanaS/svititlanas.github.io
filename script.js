// Запускаємо функції після завантаження сторінки
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("navLinks");
  const navLinks = document.querySelectorAll(".nav-links a");

  // Перемикання меню на мобільних пристроях
  burger?.addEventListener("click", () => {
    menu?.classList.toggle("active");
  });

  // Закриття меню після кліку по посиланню
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu?.classList.remove("active");
    });
  });

  // Додавання тіні до навбару при скролі
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });
});