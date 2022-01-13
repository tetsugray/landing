import {bgImgLight, findListWrapper, picture} from './variables'

export function addLampList(data) {
    picture.innerHTML = bgImgLight

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