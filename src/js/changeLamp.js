export function changeLamp(data) {
    const lampButtons = document.querySelectorAll('.catalog__choose-lamp')
    for (let i = 0; i < lampButtons.length; i++) {
        lampButtons[i].addEventListener('click', clickonLamp)
    }
    
    function clickonLamp() {
        const infoDiv = document.querySelector('.catalog__lamp-information')
        const fullLamp = document.querySelector('.catalog__lamp')
        const demonstrationLamp = document.querySelector('.container__lamp')
        const id = document.activeElement.value

        let lampImage = `<img src="${data[id].image}" alt="${data[id].name}">`
        let material = data[id].material.charAt(0).toUpperCase() + data[id].material.slice(1).toLowerCase()
        
        let infoTemplate = `
        <div class="catalog__text">
            <b>Material:</b> ${material} <br><br>
            <b>Dimensions (cm):</b> H ${data[id].height} x W ${data[id].width} x D ${data[id].width} <br><br>
            <b>Net Weight:</b> ${data[id].weight} kg <br><br>
            <b>Electrification:</b><br> ${data[id].electrification.split(',').join(' |')}
        </div>
        `
        for (let i = 0; i < lampButtons.length; i++) {
            lampButtons[i].classList.remove('active')
        }
        document.activeElement.classList.add('active')
        infoDiv.innerHTML = infoTemplate
        fullLamp.innerHTML = lampImage
        demonstrationLamp.innerHTML = lampImage
    }
}