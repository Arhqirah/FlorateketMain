document.addEventListener("scroll", function () {
  var h1 = document.querySelector(".content4 h1");
  var h1Position = h1.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (h1Position < windowHeight) {
    h1.classList.add("show");
  }
});

document.addEventListener("scroll", function () {
  var storeText = document.querySelector(".content5");
  var storeTextPosition = storeText.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (storeTextPosition < windowHeight) {
    storeText.classList.add("show");
  }
});
document.addEventListener("scroll", function () {
  var content3 = document.querySelector(".content3");
  var content3Position = content3.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (content3Position < windowHeight) {
    content3.classList.add("show");
  }
});
