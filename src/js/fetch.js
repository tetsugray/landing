import {findListWrapper, imgMain, loader} from './variables'

const url = 'https://private-anon-36be51ed02-lampshop.apiary-mock.com/lamps'

export async function getLampData() {
    try {
        imgMain.insertAdjacentHTML('afterbegin', loader)
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