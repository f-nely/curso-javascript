// scroll em elemento
console.log(document.querySelector('.text').scrollTop);
console.log(document.querySelector('.text').scrollLeft);

// scroll na tela inteira
console.log(window.scrollY);
console.log(window.scrollX);

document.querySelector('.text').scrollTo(0, 0);
window.scrollTo(0, 0);

function topScreen() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function monitoringButtonScroll() {
  if(window.scrollY) {
    // ocultar botão
    document.querySelector('.btn-scroll').style.display = 'block';
  } else {
    document.querySelector('.btn-scroll').style.display = 'none';
  }
}

//setInterval(monitoringButtonScroll, 1000);
window.addEventListener('scroll', monitoringButtonScroll);
