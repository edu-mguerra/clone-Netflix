import React from "react";
import './Header.css'

export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo" >
                <a href="">
                    <img src="https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix--user" />
                </a>
            </div>
        </header>
    )
}
