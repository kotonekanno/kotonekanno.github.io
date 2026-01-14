document.addEventListener('DOMContentLoaded', () => {
  const stickyToc = document.getElementById('sticky-toc');
  const button = stickyToc.querySelector('.icon-btn');

  button.addEventListener('click', (e) => {
    e.stopPropagation();
    stickyToc.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    stickyToc.classList.remove('open');
  });
});
