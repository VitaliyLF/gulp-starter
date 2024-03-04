import vars from '../_vars'

export const disableScroll = () => {
  const paddingOffset =
    vars.windowEl.innerWidth - vars.documentEl.documentElement.clientWidth
  vars.bodyEl.classList.add('scroll-lock')
  vars.bodyEl.style.paddingRight = `${paddingOffset}px`
  vars.bodyEl.style.scrollBehavior = 'unset'
}
