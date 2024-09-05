import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import LandingPage from "scenes/landingPage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import CoursesPage from "scenes/coursesPage";
import FoodAndBeveragePage from "scenes/food-beveragesPage";
import CartPage from "scenes/cartPage";
import RestaurantPage from "scenes/resturents";
import RecipesPage from "scenes/recipes";
import AddRestaurantPage from "scenes/resturents/add";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <ToastContainer />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />} />
            <Route path="/courses" element={isAuth ? <CoursesPage /> : <Navigate to="/" />} />
            <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />
            <Route path="/food-beverages" element={<FoodAndBeveragePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/restaurants" element={<RestaurantPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/restaurants/add" element={<AddRestaurantPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;