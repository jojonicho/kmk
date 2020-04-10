import React, { useState, useEffect } from 'react'
import './style.js'
import KMK from '../../assets/kmk.svg';
import { Link } from "react-router-dom";
import { HeaderFooterContainer } from "./style";

const Navbar = props => {
    const [menuHeight, setMenuHeight] = useState("0px");
    const [menuOverflow, setMenuOverflow] = useState(false);
    const [menu, setMenu] = useState(false);

    const { children, color } = props;

    const colors = {
        white: { backgroundColor: "#E2C7C0", color: "333333"},
        pink: { backgroundColor: '#E9ADB7', color: "white" },
        green: { backgroundColor: "#D1E9D6", color: "black" },
        blue: { backgroundColor: "#454FCB", color: "white" },
        yellow: { backgroundColor: "#F1CF33", color: "#454FCB" },
        red: { backgroundColor: "#EA6229", color: "white" },
        dark: { backgroundColor: "#0D2040", color: "white", transition: "0.5s" },
        // notShown: {
        //     backgroundColor: "#0D2040",
        //     color: "white",
        //     transform: "translateY(-100vh)",
        //     transition: "0.5s"
        // }
    };

    return (
        <HeaderFooterContainer>
            <div className="header" style={colors[color]}>
                <div>
                    <Link to="/" className="no-decor">
                        <img className="logo" src={KMK} alt="logo"></img>
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
            </div>
            {/* <div className={"childcontainer"}> */} 
            <div>
                {children}
            </div>
            <div className="footer" style={colors.green}>
                <p>Copyright © 2020 - KMK Fasilkom UI 2020</p>
            </div>
        </HeaderFooterContainer>
    );
}

export default Navbar;
