import "./css/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    return (
        <div className="navbar-container">
            <h1 className="navbar-heading">DEV@Deakin</h1>
            <div className="navbar__search-container">
                <FontAwesomeIcon className="navbar__search-icon" icon={faMagnifyingGlass} />
                <input type="text" placeholder="Search..." />
            </div>
            <div className="navbar__links">
                <button className="navbar__links-post">Post</button>
                <button className="navbar__links-login">Login</button>
            </div>
        </div>
    )
}

export default Navbar;