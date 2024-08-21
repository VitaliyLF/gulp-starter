// import { disableScroll } from '../functions/disable-scroll.js'
// import { enableScroll } from '../functions/enable-scroll.js'
// ;(function () {
//   const burger = document.querySelector('[data-burger]')
//   const menu = document.querySelector('[data-menu]')
//   const menuItems = document.querySelectorAll('[data-menu-item]')
//   const overlay = document.querySelector('[data-menu-overlay]')

//   burger.addEventListener('click', (e) => {
//     burger.classList.toggle('header__burger--active')
//     menu.classList.toggle('header__nav--active')
//     overlay.classList.toggle('overlay--active')

//     if (menu.classList.contains('header__nav--active')) {
//       burger.setAttribute('aria-expanded', 'true')
//       burger.setAttribute('aria-label', 'Close menu')
//       disableScroll()
//     } else {
//       burger.setAttribute('aria-expanded', 'false')
//       burger.setAttribute('aria-label', 'Open menu')
//       enableScroll()
//     }
//   })

//   overlay.addEventListener('click', () => {
//     closeMenu()
//   })

//   menuItems.forEach((el) => {
//     el.addEventListener('click', () => {
//       closeMenu()
//     })
//   })

//   const closeMenu = () => {
//     burger.setAttribute('aria-expanded', 'false')
//     burger.setAttribute('aria-label', 'Open menu')
//     burger.classList.remove('header__burger--active')
//     menu.classList.remove('header__nav--active')
//     overlay.classList.remove('overlay--active')
//     enableScroll()
//   }
// })()
