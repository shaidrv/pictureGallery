const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()
    slide.classList.add('active')
  })
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    toggleRight()
  }
  if (event.key === 'ArrowLeft') {
    toggleLeft()
  }
})

function toggleRight() {
  const index = activeSlideIndex()
  if (index < slides.length - 1) {
    activateSlide(index + 1)
  }
}

function toggleLeft() {
  const index = activeSlideIndex()
  if (index > 0) {
    activateSlide(index - 1)
  }
}

function activeSlideIndex() {
  const activeSlide = document.querySelector('.slide.active')
  return Number(activeSlide.getAttribute('data-index'))
}

function activateSlide(index) {
  clearActiveClasses()
  const slide = document.querySelector('[data-index="' + index + '"]')
  slide.classList.add('active')
}
