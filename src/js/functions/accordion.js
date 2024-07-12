class Accordion {
  constructor(accordion, options) {
    let defaultOptions = {
      isOpen: () => {},
      isClose: () => {},
      speed: 300,
    }

    this.options = Object.assign(defaultOptions, options)
    this.accordion = accordion
    if (!this.accordion) return
    this.control = this.accordion.querySelector('.accordion__control')
    this.content = this.accordion.querySelector('.accordion__content')
    this.event()
    this.start()
  }

  start() {
    if (this.accordion.classList.contains('is-open')) {
      this.open()
    }
  }

  event() {
    if (this.control && this.content) {
      this.control.addEventListener('click', (e) => {
        this.accordion.classList.toggle('open')

        if (this.accordion.classList.contains('open')) {
          this.open()
        } else {
          this.close()
        }
      })
    }
  }

  open() {
    this.accordion.style.setProperty(
      '--accordion-time',
      `${this.options.speed / 1000}s`,
    )
    this.accordion.classList.add('is-open')
    this.control.setAttribute('aria-expanded', true)
    this.content.setAttribute('aria-hidden', false)
    this.content.style.maxHeight = this.content.scrollHeight + 'px'
    this.options.isOpen(this)
  }

  close() {
    this.accordion.classList.remove('is-open')
    this.control.setAttribute('aria-expanded', false)
    this.content.setAttribute('aria-hidden', true)
    this.content.style.maxHeight = null
    this.options.isClose(this)
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.js-accordion')

  accordions.forEach((accordion) => {
    new Accordion(accordion, {
      speed: 400,
    })
  })
})
