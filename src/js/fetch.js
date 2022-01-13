import {findListWrapper, imgContainer, loader} from './variables'

const url = 'https://private-anon-6f1cc07d62-lampshop.apiary-mock.com/lamps'

export async function getLampData() {
    try {
        imgContainer.insertAdjacentHTML('afterbegin', loader)
        findListWrapper.insertAdjacentHTML('afterbegin', loader)
        let response = await fetch(url)
        return await response.json()
    } catch(err) {
        console.error(err)
    } finally {
        const findPreloader = document.querySelectorAll('.preloader')
        for (let i = 0; i < findPreloader.length; i++) {
            findPreloader[i].remove()
        }
    }
}