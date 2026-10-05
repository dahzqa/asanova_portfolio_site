const navItems = [...document.querySelectorAll('.project-nav__item')];
const sections = [...document.querySelectorAll('[data-project-section]')];

function setActive(id) {
  navItems.forEach((item) => {
    item.classList.toggle('is-active', item.dataset.project === id);
  });
}

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (visible) setActive(visible.target.dataset.projectSection);
}, {
  root: null,
  rootMargin: '-30% 0px -30% 0px',
  threshold: [0, .1, .25, .5, .75, 1]
});

sections.forEach((section) => observer.observe(section));

navItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById(item.dataset.project)?.scrollIntoView({ behavior: 'smooth' });
  });
});
