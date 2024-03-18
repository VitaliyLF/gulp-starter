export const disableScroll = () => {
  const paddingOffset = `${window.innerWidth - document.body.offsetWidth}px`
  document.documentElement.style.scrollBehavior = 'none'

  document.body.style.paddingRight = paddingOffset
  document.body.classList.add('scroll-lock')
}
