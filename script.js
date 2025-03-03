// script.js

document.addEventListener("DOMContentLoaded", function() {
  // Dark Mode Toggle Elements (Desktop)
  const themeToggle = document.getElementById("theme-toggle");
  const iconSun = document.getElementById("icon-sun");
  const iconMoon = document.getElementById("icon-moon");

  // Dark Mode Toggle Elements (Mobile)
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
  const iconSunMobile = document.getElementById("icon-sun-mobile");
  const iconMoonMobile = document.getElementById("icon-moon-mobile");

  function setTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark");
      iconSun.classList.add("hidden");
      iconMoon.classList.remove("hidden");
      if (iconSunMobile && iconMoonMobile) {
        iconSunMobile.classList.add("hidden");
        iconMoonMobile.classList.remove("hidden");
      }
    } else {
      document.body.classList.remove("dark");
      iconSun.classList.remove("hidden");
      iconMoon.classList.add("hidden");
      if (iconSunMobile && iconMoonMobile) {
        iconSunMobile.classList.remove("hidden");
        iconMoonMobile.classList.add("hidden");
      }
    }
    localStorage.setItem("theme", theme);
  }

  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  themeToggle.addEventListener("click", function() {
    setTheme(document.body.classList.contains("dark") ? "light" : "dark");
  });

  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener("click", function() {
      setTheme(document.body.classList.contains("dark") ? "light" : "dark");
    });
  }

  // Update Footer Year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Hamburger Menu Toggle for Mobile Navigation
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  menuToggle.addEventListener("click", function() {
    mobileNav.classList.toggle("open");
  });

  // Auto-close mobile navigation when a link is clicked
  const mobileNavLinks = document.querySelectorAll("#mobile-nav a");
  mobileNavLinks.forEach(link => {
    link.addEventListener("click", function() {
      mobileNav.classList.remove("open");
    });
  });

  // Auto-close mobile nav when window resized above breakpoint
  window.addEventListener("resize", function() {
    if (window.innerWidth >= 768) {
      mobileNav.classList.remove("open");
    }
  });
});
