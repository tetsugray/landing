import { lightImage } from ".."

export function addLampList(data) {
    let imgContainer = document.querySelector('.container__demonstration')
    let bgImg = `
    <img src="${lightImage}" class="container__img" alt="background image light">
    `
    imgContainer.insertAdjacentHTML('afterbegin', bgImg)

    let findListWrapper = document.querySelector('.catalog__lamp-wrapper')
    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            let buttonTemplate = `
            <button class="catalog__choose-lamp" value="${i}" autofocus>
                <img src="${data[i].image}" alt="${data[i].name}">
            </button>
            `
            findListWrapper.insertAdjacentHTML('beforeend', buttonTemplate)
        } else {
            let buttonTemplate = `
            <button class="catalog__choose-lamp" value="${i}">
                <img src="${data[i].image}" alt="${data[i].name}">
            </button>
            `
            findListWrapper.insertAdjacentHTML('beforeend', buttonTemplate)
        }
    }
}