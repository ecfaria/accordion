const openedClass = 'opened';
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  const items = accordion.querySelectorAll('.accordion__item');

  items.forEach(item => {
    const header = item.getElementsByClassName('accordion__header');
    const body = item.getElementsByClassName('accordion__body');
    header[0].addEventListener('click', () => {
      toggleAccordion(item, items);
    });
  });
});

const toggleAccordion = (el, items) => {
  if (el.classList.contains(openedClass)) {
    el.classList.remove(openedClass);
  } else {
    closeAccordion(items);
    el.classList.add(openedClass);
  }
};

const closeAccordion = el => {
  for (let item of el) {
    item.classList.remove(openedClass);
  }
};
