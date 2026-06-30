document.addEventListener('DOMContentLoaded', () => {
  // Sticky Header Logic
  const header = document.getElementById('StockShopHeader');
  const stickyEnabled = header.classList.contains('sticky-enabled');
  const scrollThreshold = 130; 

  if (stickyEnabled) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('is-sticky');
      } else {
        header.classList.remove('is-sticky');
      }
    }, { passive: true });
  }

  // Mobile Menu Logic
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.getElementById('MobileMenu');
  const closeMenuBtn = document.querySelector('.close-mobile-menu');
  const body = document.body;

  function openMenu() {
    mobileMenu.classList.add('is-open');
    body.style.overflow = 'hidden';
    mobileToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    body.style.overflow = '';
    mobileToggle.setAttribute('aria-expanded', 'false');
  }

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    mobileMenu.querySelector('.mobile-menu-overlay').addEventListener('click', closeMenu);
  }

  // Accordion Logic for Mobile Menu
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const content = trigger.nextElementSibling;
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      
      trigger.setAttribute('aria-expanded', !isExpanded);
      if (!isExpanded) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  });
});