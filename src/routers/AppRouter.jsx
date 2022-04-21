import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "../components/Header"
import { AboutUs } from "../pages/AboutUs"
import { Home } from "../pages/Home"
import { Videos } from "../pages/Videos"

export const AppRouter = () => {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path='/about' element={<AboutUs />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/*' element={<Home />} />

      </Routes>

    </BrowserRouter>
  )
}
