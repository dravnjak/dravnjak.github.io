import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div>
            <img className="logo" style={{ maxWidth: "7em" }} src="logo.png" alt="white logo"/>
            <img className="logo-full" style={{ maxWidth: "7em" }} src="logo-full.png" alt="white logo"/>
            <hr className="line opacity-75" />
        </div>
    )
}

export default Header
