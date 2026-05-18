
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "./useOnlineStatus";
import { useTheme } from './ThemeContext';

const Header = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://t3.ftcdn.net/jpg/04/69/99/84/240_F_469998410_dS3rIFPywmpTDYYr7VY6wd1SlV6c7Fa7.jpg"
        />
      </div>
      <div className="navi">
        <ul>
          <li>Status:{onlineStatus ? "🟢":"🔴"}</li>
          <li><a href="/">Home</a></li>
          <li><Link to="/about">About us</Link></li>
          <li><a href="/contact">Contact Us</a></li>
           <li><Link to="/grocery">Grocery</Link></li>
           <button 
           className="toggle-btn"
            onClick={toggleTheme} 
           >
        {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
          <button onClick={() => setIsloggedIn(!isLoggedIn)} className="login-btn">{
            isLoggedIn ? "Logout" : "Login"
          }</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;