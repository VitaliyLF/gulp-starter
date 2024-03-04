import vars from '../_vars'

export const enableScroll = () => {
  vars.bodyEl.classList.remove('scroll-lock')
  vars.bodyEl.style.paddingRight = ''
  vars.bodyEl.style.scrollBehavior = ''
}
