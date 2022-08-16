$(document).ready(function () {
  let menu = document.querySelector(".menu");
  let windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    menu.classList.add("blur");
  } else {
    menu.classList.remove("blur");
  }
});

$(document).ready(function () {
  window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    let scrollPos = window.scrollY;
    if (scrollPos > 120) {
      nav.classList.add("blur");
    } else {
      nav.classList.remove("blur");
    }
  });
});

$("svg.ham").click(function () {
  let menu = document.querySelector(".menu");
  if ($(this).hasClass("active")) {
    menu.classList.add("menu-transition");
  } else {
    menu.classList.remove("menu-transition");
  }
});

// ?######################################################

$('a[href*="#"]')
  // игнорируем пустые ссылки
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href^="#tab"]')
  .click(function (event) {
    // страничные ссылки
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // определяем целевую ссылку
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // сущетсвует ли цель, до которой нужно скроллить?
      if (target.length) {
        // если анимация произойдет, предполагаем куда нужно пролистать
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          600,
          function () {
            // коллбек
            // меняем фокус
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // проеряем, в фокусе ли блок, на который был скроллинг
              return false;
            } else {
              $target.attr("tabindex", "-1"); // доабвляем tabindex на нефокусируемые элементы
              $target.focus(); // снова устанавливаем фокус
            }
          }
        );
      }
    }
  });

// ******************************************************

let textFromLinkToWorks = document.querySelector(".works-link");

if (window.innerWidth < 768) {
  document.querySelector("#portfolio").append(textFromLinkToWorks);
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!(function () {
  const e = document.documentElement;
  if (
    (e.classList.remove("no-js"),
    e.classList.add("js"),
    document.body.classList.contains("has-animations"))
  ) {
    const e = (window.sr = ScrollReveal());
    e.reveal(
      ".feature, .tabs-links li, .testimonial, .pricing-table, .pricing-faqs, .cta-inner",
      {
        duration: 600,
        distance: "40px",
        easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        interval: 100,
        origin: "bottom",
        viewFactor: 0.2,
      }
    );
  }
  const i = document.getElementsByClassName("tab-link");
  if (i.length)
    for (let e = 0; e < i.length; e++)
      i[e].addEventListener("click", function (t) {
        t.preventDefault();
        let n = i[e].parentNode.parentNode,
          a = n.nextElementSibling.getElementsByClassName("tab-panel"),
          s = n.getElementsByClassName("tab-link");
        for (let e = 0; e < s.length; e++) s[e].classList.remove("is-active");
        for (let e = 0; e < a.length; e++) a[e].classList.remove("is-active");
        let l = this.getAttribute("href");
        i[e].classList.add("is-active"),
          document.querySelector(l).classList.add("is-active");
      });
})();

$(".source").hover(function () {
  var value = $(this).attr("data-link_img");
  $(".preview").css("background-image", value);
});

$(".tooltip-life").click(function () {
  $(this).addClass(".tooltip-opened");
});
$(".tooltip-opened").mouseout(function () {
  $(this).removeClass(".tooltip-opened");
});
