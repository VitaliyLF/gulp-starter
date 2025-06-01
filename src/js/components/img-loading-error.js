const images = document.querySelectorAll('img')

if (images) {
  images.forEach((image) => {
    image.onerror = () => {
      image.setAttribute('data-img-loading-error', '')
    }
  })
}
