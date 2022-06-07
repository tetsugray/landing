import './style.scss'

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
