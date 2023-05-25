var imageSrc1 = "IMAGES/Bonsai.png";
var imageSrc2 = "IMAGES/AnotherBonsai.png";
var imageSrc3 = "IMAGES/AnotherBonsai2.png";
var currentImageSrc = imageSrc1;
var imgElement = document.getElementById("bonsaiImage");

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
