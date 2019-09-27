const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  const items = accordion.querySelectorAll('.accordion__item');

  items.forEach(item => {
    const header = item.getElementsByClassName('accordion__header')[0];
    header.addEventListener('click', () => {
      toggleAccordion(item, items, header);
    });
  });
});

const toggleAccordion = (el, items, header) => {
  if (el.classList.contains('opened')) {
    el.classList.remove('opened');
    el.getElementsByClassName('accordion__tab')[0].setAttribute(
      'aria-hidden',
      true
    );
    header.setAttribute('aria-expanded', false);
  } else {
    closeAccordion(items);
    el.classList.add('opened');
    el.getElementsByClassName('accordion__tab')[0].setAttribute(
      'aria-hidden',
      false
    );
    header.setAttribute('aria-expanded', true);
  }
};

const closeAccordion = el => {
  for (let item of el) {
    item.classList.remove('opened');
    item
      .getElementsByClassName('accordion__header')[0]
      .setAttribute('aria-expanded', false);
  }
};
