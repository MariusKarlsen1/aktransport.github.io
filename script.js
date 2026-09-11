document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("site-header");
  var toggle = document.getElementById("nav-toggle");

  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 10);
  });

  toggle.addEventListener("click", function () {
    header.classList.toggle("open");
  });

  document.querySelectorAll(".main-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      header.classList.remove("open");
    });
  });

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = "© " + new Date().getFullYear();
  }

  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            setTimeout(function () {
              entry.target.classList.add("in-view");
            }, i * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in-view");
    });
  }
});
