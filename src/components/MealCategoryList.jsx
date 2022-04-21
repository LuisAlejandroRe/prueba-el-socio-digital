import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { MealCard } from "./MealCard";

export const MealCategoryList = () => {

  const [url, setUrl] = useState('');
  const param = useParams();

  useEffect(() => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${param.categoryName}`)
  }, [param])

  const { loading, data, error} = useFetch(url); 

  if ( data?.meals === null || error ) {
    return (<h1>Cannot find the category, Please check the url</h1>)
  }

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
