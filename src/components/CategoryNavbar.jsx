import { NavLink } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export const CategoryNavbar = () => {

  const { loading, error, data } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  
  if( error ) {
    return (<h1>{error}</h1>)
  }

  return (
    <nav className="category__navbar">
      {
        loading
        ?
        <div className="category__navbarItem">
          Loading...
        </div>
        :
        data?.categories.map( category => (
          <NavLink 
            key={category.idCategory}
            className={ ({ isActive }) => "category__navbarItem" + (isActive ? ' category-active' : '') }
            to={`/category/${category.strCategory}`}
          >
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <span>{category.strCategory}</span>
          </NavLink>
        ))
      }
    </nav>
  )
}
