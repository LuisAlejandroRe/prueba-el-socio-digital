import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Banner } from "./Banner";

export const MealScreen = () => {

  const [url, setUrl] = useState('')
  const param = useParams();

  useEffect(() => {
    
    if( param.mealId ) {
      setUrl(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param.mealId}`)
    }
  
  }, [param])

  const { loading, data, error } = useFetch(url);
  let mealData = null;

  if ( data?.meals ) {
    mealData = data.meals[0];
  } 
  
  if ( data?.meals === null || error ) {
    return (<h1>Cannot find the meal, Please check the url</h1>)
  }

  return (
    <>
      <Banner />
      {
        loading
        ?
        <h1>Loading...</h1>
        :
        <section>
          <div>
            <div>
              <span>20-30</span>
              <h1>{mealData?.strMeal}</h1>
              <span>32 reviews</span>
              <h3>{mealData?.strArea}</h3>
            </div>
          </div>
          <p>{mealData?.strInstructions}</p>
        </section>
      }
    </>
  )
}
