import {getLampData} from "./fetch";

async function addLampList() {
    let findListWrapper = document.querySelector('.catalog__lamp-wrapper')
    let lampData = await getLampData()
    for (let i = 0; i < lampData.length; i++) {
        let buttonTemplate = `
        <button class="catalog__choose-lamp">
            <img src="${lampData[i].image}" alt="${lampData[i].name}">
        </button>
        `
        findListWrapper.insertAdjacentHTML('beforeend', buttonTemplate)
    }
}

addLampList()