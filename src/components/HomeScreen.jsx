import { Banner } from "./Banner"
import { CategoryNavbar } from "./CategoryNavbar"
import { MealList } from "./MealList"

export const HomeScreen = () => {
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

        <MealList />

      </section>
    </>
  )
}
