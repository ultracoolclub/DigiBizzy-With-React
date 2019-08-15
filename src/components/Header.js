import React from "react"



function Header() {
    return(
        <div>
            <header className="header">
                <h1 className="logo">Stock Info</h1>
                <nav className="navBar">
                    <ul className="navList">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Reading</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header