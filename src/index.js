import './main.scss'

import darkImage from './assets/images/background_dark.png'
import lightImage from './assets/images/background_light.png'

export {darkImage, lightImage}

import {addLampList} from './js/addLampList'
import {getLampData} from './js/fetch'
import {changeLamp} from './js/changeLamp'
import {changeMode} from './js/changeMode'

async function runAll() {
    let lampData = await getLampData()
    addLampList(lampData)
    changeLamp(lampData)
    changeMode(lampData)
}

runAll()
