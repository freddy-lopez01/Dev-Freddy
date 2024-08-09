import React, {useState} from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true)

    const handleClick = () => setClick(!click); const closeMobileMenu = () => setClick(false)


    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    };
    window.addEventListener('resize', showButton)
  return (
    <>
        <nav className="Navbar">
            <div className="Navbar-container">
		        <div classname="profile">
		        </div>
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>Freddy Lopez</Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/projects' className="nav-links" onClick={closeMobileMenu}>Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/socials' className="nav-links" onClick={closeMobileMenu}>Gallery</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  );
}
/*studioBinder*/
export default NavBar
