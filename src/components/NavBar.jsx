import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

    return (
        <>
            <nav>
                <ul className="ul-style">
                    <li className="li-style">
                        <Link 
                            className={location.pathname === '/' ? 'links active' : 'links'} 
                            to='/'>Home</Link>
                    </li>
                    <li className="li-style">
                        <Link 
                            className={location.pathname === '/about' ? 'links active' : 'links'} 
                            to='/about'>About</Link>
                    </li>
                    <li className="li-style">
                        <Link 
                            className={location.pathname === '/team' ? 'links active' : 'links'} 
                            to='/team'>Team</Link>
                    </li>
                    <li className="li-style">
                        <Link 
                            className={location.pathname === '/contact' ? 'links active' : 'links'} 
                            to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;
