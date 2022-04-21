import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Banner } from "./Banner";
import BannerImg from '../assets/Imagen -2-image.png';

export const MealScreen = () => {

  const [url, setUrl] = useState('')
  const param = useParams();
  const navigate = useNavigate();

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

  const handleReturn = () => {
    navigate( -1 )
  };
  
  if ( data?.meals === null || error ) {
    return (<h1>Cannot find the meal, Please check the url</h1>)
  }

  return (
    <>
      <Banner
        img={BannerImg}
      />
      {
        loading
        ?
        <h1>Loading...</h1>
        :
        <section className="mealScreen__container">
          <div>
            <div className="mealScreen__leftInfo">
              <i 
                onClick={handleReturn} 
                className="fa fa-chevron-left fa-2x" 
                aria-hidden="true"
                style={{ 'cursor': 'pointer' }}
              ></i>
              <span>
                <i className="fa fa-clock" aria-hidden="true"></i>
                -20-30
              </span>
              <h1>
                {mealData?.strMeal}
                <br />
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </h1>
              <span>32 reviews</span>
              <small>{mealData?.strArea}</small>
            </div>
            <i className="fa fa-heart fa-2x" aria-hidden="true"></i>
          </div>
          <p>{mealData?.strInstructions}</p>
        </section>
      }
    </>
  )
}
