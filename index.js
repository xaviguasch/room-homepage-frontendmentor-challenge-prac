const sliderBtnLeft = document.getElementById('slider-btn-left')
const sliderBtnRight = document.getElementById('slider-btn-right')
const copyBlocks = document.querySelectorAll('.copy-block')

const imgMobile = document.querySelector('.img--mobile')
const imgDesktop = document.querySelector('.img--desktop')

const headWrapper = document.querySelector('.header-inner-wrapper')
const navBtns = document.querySelector('.nav-buttons')
const body = document.querySelector('body')

const topImgsMobile = [
  './images/mobile-image-hero-1.jpg',
  './images/mobile-image-hero-2.jpg',
  './images/mobile-image-hero-3.jpg',
]
const topImgsDesktop = [
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

  imgMobile.src = topImgsMobile[currentSlide]
  imgDesktop.src = topImgsDesktop[currentSlide]
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

// Modal navigation
navBtns.addEventListener('click', () => {
  headWrapper.classList.toggle('active')
  body.classList.toggle('nav-open')
})
