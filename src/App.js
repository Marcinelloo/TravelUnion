import { Route, Routes } from "react-router-dom";
import BottomPage from "./components/BottomPage";
import MainNavigation from "./components/NavComponents/MainNavigation";
import UserComments from "./components/userPageComponents/UserComments";
import UserData from "./components/userPageComponents/UserData";
import UserReservations from "./components/userPageComponents/UserReservations";
import HomePage from "./pages/HomePage";
import OfferPage from "./pages/OfferPage";
import RegisterPage from "./pages/RegisterPage";
import SigninPage from "./pages/SigninPage";

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/offer/:id" element={<OfferPage />} exact></Route>
        <Route path="/signin" element={<SigninPage />} exact />
        <Route path="/register" element={<RegisterPage />} exact />
        <Route path="/userInfo" element={<UserData />} exact />
        <Route path="/userReservations" element={<UserReservations />} exact />

        <Route path="/userComments" element={<UserComments />} exact />
      </Routes>
      <BottomPage />
    </>
  );
}

export default App;
