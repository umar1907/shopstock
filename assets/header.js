document.addEventListener('DOMContentLoaded', () => {
  // Sticky Header Logic
  const header = document.getElementById('StockShopHeader');
  const stickyEnabled = header && header.classList.contains('sticky-enabled');
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

  // Site Drawer Logic
  const drawer = document.getElementById('SiteDrawer');
  const openBtns = document.querySelectorAll('.js-drawer-open');
  const closeBtns = document.querySelectorAll('.js-drawer-close');
  const body = document.body;

  function openDrawer() {
    if(drawer) {
      drawer.classList.add('is-open');
      body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if(drawer) {
      drawer.classList.remove('is-open');
      body.style.overflow = '';
    }
  }

  openBtns.forEach(btn => btn.addEventListener('click', openDrawer));
  closeBtns.forEach(btn => btn.addEventListener('click', closeDrawer));
});
// Mobile Scroll Logic for Search Bar
let lastScrollTop = 0;
const mobileSearchRow = document.querySelector('.mobile-search-row');

window.addEventListener('scroll', () => {
  if (window.innerWidth <= 992 && mobileSearchRow) { // Sirf mobile par chale
    let st = window.pageYOffset || document.documentElement.scrollTop;
    
    if (st > lastScrollTop && st > 100) {
      // Scroll Down - Hide
      mobileSearchRow.classList.add('hide-search');
    } else {
      // Scroll Up - Show
      mobileSearchRow.classList.remove('hide-search');
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }
}, { passive: true });