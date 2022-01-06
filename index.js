const sliderBtnLeft = document.getElementById('slider-btn-left')
const sliderBtnRight = document.getElementById('slider-btn-right')
const copyBlocks = document.querySelectorAll('.copy-block')

const topImgs = [
  './images/desktop-image-hero-1.jpg',
  './images/desktop-image-hero-2.jpg',
  './images/desktop-image-hero-3.jpg',
]

let currentSlide = 0

const showSlide = (currentSlide) => {
  copyBlocks.forEach((cp) => {
    cp.classList.add('hidden')
  })
  copyBlocks[currentSlide].classList.remove('hidden')
}

showSlide(currentSlide)

const goToNextSlide = () => {
  currentSlide++

  if (currentSlide > copyBlocks.length - 1) {
    currentSlide = 0
  }

  showSlide(currentSlide)
}

const goToPreviousSlide = () => {
  currentSlide--

  if (currentSlide < 0) {
    currentSlide = copyBlocks.length - 1
  }
  showSlide(currentSlide)
}

sliderBtnLeft.addEventListener('click', () => {
  goToPreviousSlide()
})

sliderBtnRight.addEventListener('click', () => {
  goToNextSlide()
})
