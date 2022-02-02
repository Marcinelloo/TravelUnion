import { Route, Routes } from "react-router-dom";
import BottomPage from "./components/BottomPage";
import MainNavigation from "./components/MainNavigation";
import HomePage from "./pages/HomePage";
import OfferPage from "./pages/OfferPage";
import RegisterPage from "./pages/RegisterPage";
import SigninPage from "./pages/SigninPage";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/offer/:id" element={<OfferPage />} exact></Route>
        <Route path="/signin" element={<SigninPage />} exact />
        <Route path="/register" element={<RegisterPage />} exact />
      </Routes>
      <BottomPage />
    </div>
  );
}

export default App;
