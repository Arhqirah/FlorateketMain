var imageSrc1 = "IMAGES/Bonsai.png";
var imageSrc2 = "IMAGES/AnotherBonsai.png";
var imageSrc3 = "IMAGES/AnotherBonsai2.png";
var currentImageSrc = imageSrc1;
var imgElement = document.getElementById("bonsaiImage");

function fadeOut() {
  var opacity = 1;
  var fadeInterval = setInterval(function () {
    opacity -= 0.05; // Adjust the decrement value to control the fade intensity
    imgElement.style.opacity = opacity;
    if (opacity <= 0) {
      clearInterval(fadeInterval);
      toggleImage();
      fadeIn();
    }
  }, 50); // Adjust the interval to control the smoothness of the fade
}

function fadeIn() {
  var opacity = 0;
  var fadeInterval = setInterval(function () {
    opacity += 0.05; // Adjust the increment value to control the fade intensity
    imgElement.style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(fadeInterval);
    }
  }, 50); // Adjust the interval to control the smoothness of the fade
}

function toggleImage() {
  if (currentImageSrc === imageSrc1) {
    imgElement.src = imageSrc2;
    currentImageSrc = imageSrc2;
  } else if (currentImageSrc === imageSrc2) {
    imgElement.src = imageSrc3;
    currentImageSrc = imageSrc3;
  } else {
    imgElement.src = imageSrc1;
    currentImageSrc = imageSrc1;
  }
}

setInterval(fadeOut, 5500);
