import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import { NavLink } from "react-router-dom";
 
function Navbar() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    console.log('theme', theme)
  return (
    <nav className={`Navbar ${theme}`}>
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "dark " : "light "}
      </button>
    </nav>
  );
}
 
export default Navbar;