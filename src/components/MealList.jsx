import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchTenTimes } from "../helpers/fetchTenTimes";
import useFetch from "../hooks/useFetch";
import { MealCard } from "./MealCard";

export const MealList = () => {

  const [url, setUrl] = useState('')
  const param = useParams();

  useEffect(() => {
    
    if( param.categoryName ) {
      setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${param.categoryName}`)
    } else {
      const state = fetchTenTimes();
      console.log(state)
    }
  
  }, [param])

  const { loading, data, error} = useFetch(url); 

  return (
    <div className="mealList__container">
      {
        loading
        ?
        <>
          <MealCard />
          <MealCard />
          <MealCard />
        </>
        :
        data?.meals.map( meal => (
          <MealCard
            key={meal.idMeal} 
            meal={meal} 
          />
        ))
      }
    </div>
  )
}
