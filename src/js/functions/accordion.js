class Accordion {
  constructor(selector, options) {
    let defaultOptions = {
      isOpen: () => {},
      isClose: () => {},
      speed: 300,
      isControlEnabled: true,
    }

    this.options = Object.assign(defaultOptions, options)
    this.accordion = document.querySelector(selector)
    this.control = this.accordion.querySelector('.accordion__control')
    this.content = this.accordion.querySelector('.accordion__content')
    this.isControlEnabled = this.options.isControlEnabled
    this.event()
    this.start()
  }

  start() {
    if (this.accordion) {
      if (!this.accordion.classList.contains('is-open')) {
        this.close()
      } else {
        this.open()
        if (this.isControlEnabled) {
          this.control.classList.add('active')
          this.control.textContent = 'Свернуть'
        }
      }
    }
  }

  event() {
    if (this.accordion) {
      this.accordion.addEventListener('click', (e) => {
        this.accordion.classList.toggle('is-open')

        if (this.accordion.classList.contains('is-open')) {
          this.open()
          if (this.isControlEnabled) {
            this.control.classList.add('active')
            this.control.textContent = 'Свернуть'
          }
        } else {
          this.close()
          if (this.isControlEnabled) {
            this.control.classList.remove('active')
            this.control.textContent = 'Подробнее'
          }
        }
      })
    }
  }

  open() {
    this.accordion.style.setProperty(
      '--accordion-time',
      `${this.options.speed / 1000}s`
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

export { Accordion }
