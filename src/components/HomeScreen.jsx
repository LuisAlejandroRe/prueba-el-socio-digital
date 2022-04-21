import { useParams } from "react-router-dom"
import { Banner } from "./Banner"
import { CategoryNavbar } from "./CategoryNavbar"
import { MealCategoryList } from "./MealCategoryList"
import { MealList } from "./MealList"
import BannerImg from '../assets/10882-image.jpg'

export const HomeScreen = () => {

  const params = useParams();
  console.log(params.categoryName);

  return (
    <>
      <Banner
        img={BannerImg}
      />

      <section className="home__section">

        <div className="home__sectionTop">
          <h1>Recipes</h1>
          <div>
            <input type="text" />
            <i className="fa fa-search fa-lg"></i>
          </div>
        </div>

        <CategoryNavbar />

        {
          params.categoryName !== undefined
          ?
          <MealCategoryList />
          :
          <MealList />
        }

      </section>
    </>
  )
}
