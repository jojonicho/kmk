import React from 'react'
import HeaderHome from './components/header-home/HeaderHome'
import Filosofi from './components/filosofi/Filosofi'
import Tagar from './components/tagar/Tagar'
import VisiMisi from './components/visi-misi/VisiMisi'

function HomeContainer() {
    return (
        <div>
            <HeaderHome />
            <Filosofi />
            <Tagar />
            <VisiMisi />
        </div>
    )
}

export default HomeContainer
