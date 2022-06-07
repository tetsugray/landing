import {bgImgLight, findListWrapper, picture} from './variables'

export function addLampList(data) {
    picture.innerHTML = bgImgLight

    data.forEach(el => {
        let buttonTemplate = `
            <button class="catalog__choose-lamp" value="${(+(el.id) - 1)}">
                <img src="${el.image}" alt="${el.name}">
            </button>
            `
        findListWrapper.insertAdjacentHTML('beforeend', buttonTemplate)
    })
}