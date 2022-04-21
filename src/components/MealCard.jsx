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
      </div>
      
    </Link>
  )
}
