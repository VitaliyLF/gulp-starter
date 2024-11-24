// const dialogsElements = document.querySelectorAll('.js-dialog')
// const openDialogsBtnsElements = document.querySelectorAll('.js-open-dialog')
// const closeDialogsBtnsElements = document.querySelectorAll('.js-close-dialog')

// const closeModalHandler = (dialog) => {
//   dialog.close()
// }

// openDialogsBtnsElements.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     dialogsElements[index].showModal()
//   })
// })

// closeDialogsBtnsElements.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     dialogsElements[index].close()
//   })
// })

// dialogsElements.forEach((dialog) => {
//   dialog.addEventListener('click', (event) => {
//     const dialogModal = event.currentTarget
//     const isClickedOnBackdrop = event.target === dialogModal

//     if (isClickedOnBackdrop) {
//       closeModalHandler(dialogModal)
//     }
//   })
// })

document.addEventListener('click', (event) => {
  const target = event.target

  if (target.classList.contains('js-open-dialog')) {
    const dialogIndex = [
      ...document.querySelectorAll('.js-open-dialog'),
    ].indexOf(target)

    const dialog = document.querySelectorAll('.js-dialog')[dialogIndex]

    dialog?.showModal()
  }

  if (target.classList.contains('js-close-dialog')) {
    const dialogIndex = [
      ...document.querySelectorAll('.js-close-dialog'),
    ].indexOf(target)

    const dialog = document.querySelectorAll('.js-dialog')[dialogIndex]

    dialog?.close()
  }
})

document.addEventListener('click', (event) => {
  const dialog = event.target.closest('.js-dialog')

  if (dialog && event.target === dialog) {
    dialog.close()
  }
})
