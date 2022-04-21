import { useEffect, useRef, useState } from "react";
import { MealCard } from "./MealCard";

export const MealList = () => {

  const [recipes, setRecipes] = useState([])
  const isMounted = useRef(true);

  useEffect(() => {
    
    let homeDataPromises = [];

    for (let i = 1; i <= 10; i++) {
      homeDataPromises.push(fetch('https://www.themealdb.com/api/json/v1/1/random.php'))
    }
    
    Promise.all(homeDataPromises)
      .then( 
        res => res.map( 
          el => el.json().then( 
            data => isMounted.current && setRecipes( prev => [ ...prev, data ]) 
          ) 
        ) 
      )
      .catch( console.error )

    return (() => {
      isMounted.current = false
    })
  
  }, [])

  return (
    <div className="mealList__container">
      {
        recipes.length === 0 
        ?
        <>
          <MealCard />
          <MealCard />
          <MealCard />
        </>
        :
        recipes.map( recipe => (
          <MealCard
            key={recipe.meals[0]?.idMeal} 
            meal={recipe.meals[0]} 
          />
        ))
      }
    </div>
  )
}
