import "./css/Header.css"
import header_image from "./images/header__img.png"

function Header() {
    return (
        <div className="header">
            <img className="header-image" src={header_image} alt="header"/>
            <div className="header__text">
                <h1 className="header__text-title">Welcome to Dev@Deakin</h1>
                <p className="header__text-subtitle">All your coding needs in one space.</p>
                <button className="header-cta">Read More</button>
            </div>

        </div>
    )
}

export default Header;