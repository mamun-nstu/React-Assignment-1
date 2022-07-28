import { NavLink } from "react-router-dom";
import classes from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={classes.navHolder}>
      <span>
        <NavLink to="/" className={classes.navLinkLogo}>
          <span className={classes.redlogo}>BUILD</span>
          <span className={classes.blacklogo}>ZO</span>
        </NavLink>
      </span>
      <div className={classes.nav}>
        <NavLink
          to="/"
          className={(navInfo) =>
            navInfo.isActive ? classes.active : classes.inactive
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={(navInfo) =>
            navInfo.isActive ? classes.active : classes.inactive
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={(navInfo) =>
            navInfo.isActive ? classes.active : classes.inactive
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/blog"
          className={(navInfo) =>
            navInfo.isActive ? classes.active : classes.inactive
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={(navInfo) =>
            navInfo.isActive ? classes.active : classes.inactive
          }
        >
          Contact
        </NavLink>
        <button className={classes.navButton}> Get a Free Quote </button>
      </div>
    </div>
  );
}

export default Navbar;
