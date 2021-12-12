export function changeMode(data) {
    let lightButton = document.querySelector('.catalog__choose-mode_light')
    let darkButton = document.querySelector('.catalog__choose-mode_dark')
    let image = document.querySelector('.container__img')
    let visibleLamp = document.querySelector('.container__lamp')
    

    lightButton.addEventListener('click', chooseModeLight)
    darkButton.addEventListener('click', chooseModeDark)
    
    function chooseModeLight() {
        visibleLamp.style.display = ''
        image.innerHTML = `
        <img src="assets/images/background_light.png" alt="background image light">
        `
    }
    
    function chooseModeDark() {
        const active = document.querySelector('.active')
        const isDarkMode = data[active.value].isDarkMode

        // console.log(darkButton, document.activeElement)

        if (isDarkMode === true) {
            visibleLamp.style.display = 'none'
            image.innerHTML = `
            <img src="assets/images/background_dark.png" alt="background image dark">
            `
        } else {
            alert(`Sorry, this lamp doesn't have dark mode.`)
        }
        const lampButtons = document.querySelectorAll('.catalog__choose-lamp')
        for (let i = 0; i < lampButtons.length; i++) {
            lampButtons[i].addEventListener('click', chooseModeLight)
        }
    }
}