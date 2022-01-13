import {bgImgDark, bgImgLight, picture} from './variables'

export function changeMode(data) {
    const lampButtons = document.querySelectorAll('.catalog__choose-lamp')
    const lightButton = document.querySelector('.catalog__choose-mode_light')
    const darkButton = document.querySelector('.catalog__choose-mode_dark')
    const visibleLamp = document.querySelector('.container__lamp')

    lightButton.addEventListener('click', chooseModeLight)
    darkButton.addEventListener('click', chooseModeDark)
    
    function chooseModeLight() {
        visibleLamp.style.display = ''
        picture.innerHTML = bgImgLight

        for (let i = 0; i < lampButtons.length; i++) {
            lampButtons[i].removeEventListener('click', chooseModeLight)
        }
    }
    
    function chooseModeDark() {
        const active = document.querySelector('.active')
        const isDarkMode = data[active.value].isDarkMode

        if (isDarkMode === true) {
            visibleLamp.style.display = 'none'
            picture.innerHTML = bgImgDark
            for (let i = 0; i < lampButtons.length; i++) {
                lampButtons[i].addEventListener('click', chooseModeLight)
            }
        } else {
            alert(`Sorry, this lamp doesn't have dark mode.`)
        }
    }
}