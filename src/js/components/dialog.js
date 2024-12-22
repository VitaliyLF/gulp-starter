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
