import {bgImgDark, bgImgLight, picture} from './variables'

export function changeMode(data) {
    const lampButtons = document.querySelectorAll('.catalog__choose-lamp')
    const lightButton = document.querySelector('.catalog__choose-mode_light')
    const darkButton = document.querySelector('.catalog__choose-mode_dark')
    const visibleLamp = document.querySelector('.main__lamp')

    lightButton.addEventListener('click', chooseModeLight)
    darkButton.addEventListener('click', chooseModeDark)
    
    function chooseModeLight() {
        visibleLamp.style.display = ''
        picture.innerHTML = bgImgLight
        lampButtons.forEach(el => el.removeEventListener('click', chooseModeLight))
    }
    
    function chooseModeDark() {
        const active = document.querySelector('.active')
        const isDarkMode = data[active.value].isDarkMode

        if (isDarkMode === true) {
            visibleLamp.style.display = 'none'
            picture.innerHTML = bgImgDark
            lampButtons.forEach(el => el.addEventListener('click', chooseModeLight))
        } else {
            alert(`Sorry, this lamp doesn't have dark mode.`)
        }
    }
}