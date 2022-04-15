import {findListWrapper, imgContainer, loader} from './variables'

const url = 'https://private-anon-ba5bcbebfa-lampshop.apiary-mock.com/lamps'

export async function getLampData() {
    try {
        imgContainer.insertAdjacentHTML('afterbegin', loader)
        findListWrapper.insertAdjacentHTML('afterbegin', loader)
        let response = await fetch(url)
        return await response.json()
    } catch(err) {
        console.error(err)
        alert(`Something goes wrong.`)
    } finally {
        document.querySelectorAll('.preloader').forEach(el => el.remove())
    }
}