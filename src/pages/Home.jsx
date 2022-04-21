import { Navigate, Route, Routes } from "react-router-dom"
import { HomeScreen } from "../components/HomeScreen"
import { MealScreen } from "../components/MealScreen"

export const Home = () => {
  return (
    <div className="home__container">

      <Routes>
        <Route path="category/:categoryName" element={<HomeScreen />} />
        <Route path="meal/:mealId" element={<MealScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
      
    </div>
  )
}
