import { disableScroll } from '../functions/disable-scroll.js'
import { enableScroll } from '../functions/enable-scroll.js'

const modals = document.querySelectorAll('.js-modal')
const openModals = document.querySelectorAll('.js-open-modal')
const closeModals = document.querySelectorAll('.js-close-modal')

const openModalHandler = (modal) => {
  disableScroll()
  modal.showModal()
}

const closeModalHandler = (modal) => {
  modal.addEventListener('close', () => {
    enableScroll()
  })

  modal.close()
}

const closeModalOnEsc = (e) => {
  if (e.key === 'Escape') {
    const openModal = document.querySelector('.js-modal[open]')
    if (openModal) {
      closeModalHandler(openModal)
    }
  }
}

document.addEventListener('keydown', closeModalOnEsc)

openModals.forEach((openModal, index) => {
  openModal.addEventListener('click', () => {
    openModalHandler(modals[index])
  })
})

closeModals.forEach((closeModal, index) => {
  closeModal.addEventListener('click', () => {
    closeModalHandler(modals[index])
  })
})

modals.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    const dialogModal = e.currentTarget
    const isClickedOnBackdrop = e.target === dialogModal

    if (isClickedOnBackdrop) {
      closeModalHandler(dialogModal)
    }
  })
})
