export const enableScroll = () => {
  const body = document.body

  body.style.paddingRight = '0px'
  body.classList.remove('scroll-lock')
  document.documentElement.style.scrollBehavior = 'smooth'
}
