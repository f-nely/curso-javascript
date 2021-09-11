function chargeImage(fileName, imageName) {
  document.querySelector('.image').setAttribute('src',fileName);
  document.querySelector('.image').setAttribute('data-images', imageName);
}

function getImage() {
  let img = document.querySelector('.image').getAttribute('data-images');
  alert(`The picture is ${img}`)
}