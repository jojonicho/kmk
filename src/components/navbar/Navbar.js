import React, { useState } from 'react'
import KMK from '../../assets/kmk.svg';
import { Link } from "react-router-dom";
import { NavbarContainer } from "./style";
import { stack as Menu } from "react-burger-menu"
import { useMediaQuery } from 'react-responsive'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Navbar = props => {
    var styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '25px',
            height: '25px',
            right: '25px',
            top: '25px'
        },
        bmBurgerBars: {
            height: '2.5px',
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 3em',
            fontSize: '1.5em'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
        },
        bmItem: {
            display: 'block',
            color: "white",
            padding: '1em',
        },
    }

    const [hideOnScroll, setHideOnScroll] = useState(true)
    const [pos, setPos] = useState(0)
  
    useScrollPosition(({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      setPos(currPos.y)
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    }, [hideOnScroll, pos])

    const xl = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const { isOpen } = props;

    return (
        <>
            {xl
                ?
                <NavbarContainer show={hideOnScroll} pos={pos}>
                    <nav>
                        <div>
                            <Link to="/" className="no-decor">
                                <img className="logo" src={KMK} alt="logo" />
                            </Link>
                        </div>

                        <div className="menu">
                            <Link to="/divisi">
                                <div className="menu-item">
                                    <h2 className="daftar">Divisi</h2>
                                </div>
                            </Link>
                            <Link to="/galeri">
                                <div className="menu-item">
                                    <h2 className="daftar">Galeri</h2>
                                </div>
                            </Link>
                        </div>
                    </nav>
                </NavbarContainer>
                :
                <Menu styles={styles} right isOpen={isOpen}>
                    <a className="" href="/">Home</a>
                    <a className="menu-item" href="/divisi">Divisi</a>
                    <a className="menu-item" href="/galeri">Galeri</a>
                    <img className="logo-sidebar" src={KMK} alt="logo" />
                </Menu>
            }
        </>
    );
}

export default Navbar;
