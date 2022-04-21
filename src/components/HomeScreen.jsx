import { useParams } from "react-router-dom"
import { Banner } from "./Banner"
import { CategoryNavbar } from "./CategoryNavbar"
import { MealCategoryList } from "./MealCategoryList"
import { MealList } from "./MealList"

export const HomeScreen = () => {

  const params = useParams();
  console.log(params.categoryName);

  return (
    <>
      <Banner />

      <section className="home__section">

        <div>
          <h1>Recipes</h1>
          <div>
            <input type="text" />
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
