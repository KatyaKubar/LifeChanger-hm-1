// Получаем кнопку переключения темы
const themeToggleBtn = document.querySelector(".theme-toggle-btn");

// Слушатель события клика на кнопке
themeToggleBtn.addEventListener("click", () => {
  // Переключаем класс dark-theme на body
  document.body.classList.toggle("dark-theme");
});
