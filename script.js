const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('#main-menu');

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  mainMenu.classList.toggle('open');
});

const dropdown = document.querySelector('.dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');

dropdownToggle.addEventListener('click', () => {
  const expanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
  dropdownToggle.setAttribute('aria-expanded', String(!expanded));
  dropdown.classList.toggle('open');
});



document.querySelectorAll('[data-search]').forEach((button) => {
  button.addEventListener('click', () => {
    catalogQuery.value = button.dataset.search;
    catalogMessage.textContent = `Search shortcut selected: ${button.dataset.search}.`;
  });
});

document.querySelector('#wifi-printing .button').addEventListener('click', () => {
  document.querySelector('#wifi-message').textContent =
    'WiFi Printing selected. In production, this would open the print-upload service.';
});

const branchFilter = document.querySelector('#branch-filter');
const branchCards = document.querySelectorAll('.branch-card');

branchFilter.addEventListener('change', () => {
  const selected = branchFilter.value;

  branchCards.forEach((card) => {
    card.hidden = selected !== 'all' && card.dataset.branch !== selected;
  });
});

document.querySelectorAll('[data-branch-name]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('#branch-message').textContent =
      `${button.dataset.branchName} programs selected. A full branch calendar would open next.`;
  });
});



document.querySelectorAll('[data-thing]').forEach((button) => {
  button.addEventListener('click', () => {
    
  });
});

document.querySelector('#blog-button').addEventListener('click', () => {
  document.querySelector('#blog-message').textContent =
    'The BPL Blog selected. This would open the latest library stories and event highlights.';
});

const cardForm = document.querySelector('#card-form');

cardForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();

  document.querySelector('#card-message').textContent =
    `Thank you, ${name}. Your demo library card application has started.`;

  cardForm.reset();
});



document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("back-to-top");

  if (!backToTopButton) {
    return;
  }

  const updateBackToTopButton = () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("is-visible");
    } else {
      backToTopButton.classList.remove("is-visible");
    }
  };

  window.addEventListener("scroll", updateBackToTopButton);

  backToTopButton.addEventListener("click", () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  });

  updateBackToTopButton();
});