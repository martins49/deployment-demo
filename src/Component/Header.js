import React from "react"


const Header = () => {
    return (
        <header>
            <nav className="nav">
                <img src="./logo192.png" className="react-logo"  alt=""/>
                <ul className="nav-items" >
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header