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

  const state = useFetch(url);
  console.log(state)

  return (
    <>
      <Banner />
      
    </>
  )
}
