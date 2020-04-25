import React from 'react'
import './HeaderHome.css'
import KMK from '../../assets/kmk.svg';

const HeaderHome =() => {
    return (
        <>
            <div className="headerhome">
                <img className="header-logo" src={KMK} alt="logo" />
                <p className="intro">KMK Fasilkom UI 2020</p>
            </div>
        </>
    )
}

export default HeaderHome
