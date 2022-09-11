// Scroll на верх через кнопку с право в нижнем углу ******************************************************
function scrollTo(to, duration = 700) {
  const element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    },
    animateScroll = function () {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = parseInt(
        easeInOutQuad(currentTime, start, change, duration)
      );
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        element.scrollTop = to;
      }
    };
  animateScroll();
}

document.addEventListener("DOMContentLoaded", function () {
  let btn = document.querySelector("#toTop");
  window.addEventListener("scroll", function () {
    // Если прокрутили дальше 599px, показываем кнопку
    if (pageYOffset > 100) {
      btn.classList.add("show");
      // Иначе прячем
    } else {
      btn.classList.remove("show");
    }
  });

  // При клике прокручиываем на самый верх
  btn.onclick = function (click) {
    click.preventDefault();
    scrollTo(0, 600);
  };
});

// Scroll по меню ******************************************************

$(document).ready(function () {
  var $page = $("html, body");
  $('a[href*="#"]').click(function () {
    $page.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      700
    );
    return false;
  });
});

// Scroll fixed header ******************************************************

// $(window).scroll(function () {
//   var sc = $(window).scrollTop()
//   if (sc > 100) {
//       $("#header-sroll").addClass("small")
//   } else {
//       $("#header-sroll").removeClass("small")
//   }
// });

function setCursorPosition(pos, e) {
  e.focus();
  if (e.setSelectionRange) e.setSelectionRange(pos, pos);
  else if (e.createTextRange) {
    var range = e.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}

function mask(e) {
  //console.log('mask',e);
  var matrix = this.placeholder, // .defaultValue
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
  def.length >= val.length && (val = def);
  matrix = matrix.replace(/[_\d]/g, function (a) {
    return val.charAt(i++) || "_";
  });
  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));
  i < matrix.length && matrix != this.placeholder
    ? i++
    : (i = matrix.indexOf("_"));
  setCursorPosition(i, this);
}
window.addEventListener("DOMContentLoaded", function () {
  var input = document.querySelector("#phone");
  input.addEventListener("input", mask, false);
  input.focus();
  setCursorPosition(3, input);
});
