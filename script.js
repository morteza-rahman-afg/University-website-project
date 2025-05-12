// Dynamically change pages:

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".link");
  const content = document.getElementById("content");
  const loader = document.getElementById("loader");
  const navbar = document.getElementById("navbar");
  console.log(document.getElementById("content").innerHTML);
  function loadPage(url) {
    content.innerHTML = ""; // پاک کردن محتوای قبلی
    loader.style.display = "block"; // نمایش لودینگ
    navbar.style.display = "none"; // مخفی کردن نوار منو

    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        setTimeout(() => {
          loader.style.display = "none"; // مخفی کردن لودینگ
          content.innerHTML = data; // گذاشتن محتوای جدید
          navbar.style.display = "flex"; // نمایش دوباره نوار منو
          navbar.classList.add("opacity");
        }, 700);
      })
      .catch((error) => {
        content.innerHTML = "<p>خطا در بارگذاری صفحه</p>";
        loader.style.display = "none";
        navbar.style.display = "block";
        console.error("Error loading page:", error);
      });
  }

  // کلیک روی لینک‌ها
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const page = this.getAttribute("data-page");
      loadPage(page);
    });
  });
  // بارگذاری اولیه
  loadPage("home.html");
});

//  close open sidebar:
const open_sidebar = document.querySelector(".open_sidebar");
const clos_sidebar = document.querySelector(".clos_sidebar");
const Links_sidebar = document.querySelector(".Links_sidebar");
open_sidebar.addEventListener("click", function (e) {
  Links_sidebar.classList.add("transform_translateX--0");
});
clos_sidebar.addEventListener("click", function (e) {
  Links_sidebar.classList.remove("transform_translateX--0");
});
