import { throttle } from './throttle.js'

const fixFullheight = () => {
  let vh = window.innerHeight
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

let fixHeight = throttle(fixFullheight)

fixHeight()

window.addEventListener('resize', fixHeight)
