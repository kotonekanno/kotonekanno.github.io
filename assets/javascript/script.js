// ページ遷移

const sections = document.querySelectorAll('.slide .section');

sections.forEach(section => {
  section.addEventListener('click', () => {
    const pass = section.dataset.link;
    window.location.href = pass;
  });
});

// カルーセル
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % slideCount;
  updateSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + slideCount) % slideCount;
  updateSlide();
});

function updateSlide() {
  slides.style.transform = `translateX(${-490 * index}px)`;
}

setInterval(() => {
  index = (index + 1) % slideCount;
  updateSlide();
}, 10000);
