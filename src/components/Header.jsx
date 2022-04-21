import { Link, NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <Link to='/' >
        KUKS FRESH
      </Link>

      <nav>
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
