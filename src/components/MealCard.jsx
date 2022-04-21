import { Link } from "react-router-dom"

export const MealCard = ({ meal }) => {
  return (
    <Link 
      className="mealCard__container"
      to={`/meal/${meal?.idMeal}`}
    >
      {
        meal?.strMealThumb && <img src={meal.strMealThumb} alt={meal.strMeal} />
      }

      <div>
        <span>{meal?.strMeal}</span>
        <i className="fa fa-heart" aria-hidden="true"></i>
      </div>

      <div className="mealCard__review">
        <div>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
        </div>
        <span>32 Reviews</span>
      </div>
      
    </Link>
  )
}
