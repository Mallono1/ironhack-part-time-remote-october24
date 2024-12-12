import Logo from '../../assets/logo.png';
import './Navbar.css';

function Navbar(){
    const links = ["Destinations", "Hotels", "Flights", "Bookings", "Login", "Signup","Dropdown/Select"];

    return(
        <nav>
           <img src={Logo} alt="logo_image" />
           <ul>
                {links.map(link => {
                    return <li key={link}>{link}</li>
                })}
           </ul>
        </nav>
    )
}

export default Navbar;