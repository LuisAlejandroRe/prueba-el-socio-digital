import { Link, NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header className="header__container">
      <Link to='/' >
        KUKS FRESH
      </Link>

      <nav className="header__navbar">
        <NavLink 
          to='/' 
          className={ ({ isActive }) => "nav-link" + (isActive ? ' nav-active' : '') }
        >
          Home
        </NavLink>
        <NavLink 
          to='/about' 
          className={ ({ isActive }) => "nav-link" + (isActive ? ' nav-active' : '') }
        >
          About Us
        </NavLink>
        <NavLink 
          to='/videos'
          className={ ({ isActive }) => "nav-link" + (isActive ? ' nav-active' : '') } 
        >
          Videos
        </NavLink>
      </nav>
    </header>
  )
}
