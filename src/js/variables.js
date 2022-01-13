import darkImagePng from '../assets/images/background_dark.png'
import lightImagePng from '../assets/images/background_light.png'
import darkImageWebp from '../assets/images/background_dark.webp'
import lightImageWebp from '../assets/images/background_light.webp'
import darkImagePng2x from '../assets/images/background_dark2x.png'
import lightImagePng2x from '../assets/images/background_light2x.png'

const imgContainer = document.querySelector('.container__demonstration')
const picture = document.querySelector('.container__picture')
const findListWrapper = document.querySelector('.catalog__lamp-wrapper')

let bgImgLight = `
<source srcset="${lightImagePng2x} 2x"
media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)">
<source srcset="${lightImageWebp}" type="image/webp">
<img src="${lightImagePng}" class="container__img" alt="background image light">
`

let bgImgDark = `
<source srcset="${darkImagePng2x} 2x"
media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)">
<source srcset="${darkImageWebp}" type="image/webp">
<img src="${darkImagePng}" class="container__img" alt="background image dark">
`
let loader = `
<div class="preloader lds-dual-ring"></div>
`

export {darkImagePng, lightImagePng,
    darkImageWebp, lightImageWebp,
    darkImagePng2x, lightImagePng2x,
    bgImgLight, bgImgDark, imgContainer, findListWrapper, picture, loader}