import { useLayoutEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BottomPage from "./components/BottomPage";
import MainNavigation from "./components/NavComponents/MainNavigation";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { UserContext } from "./components/UserContext";
import UpdateComment from "./components/userPageComponents/UpdateComment";
import UserComments from "./components/userPageComponents/UserComments";
import UserData from "./components/userPageComponents/UserData";
import UserReservations from "./components/userPageComponents/UserReservations";
import WriteComment from "./components/userPageComponents/WriteComment";
import HomePage from "./pages/HomePage";
import OfferPage from "./pages/OfferPage";
import RegisterPage from "./pages/RegisterPage";
import SigninPage from "./pages/SigninPage";

function App() {
  const [user, setUser] = useState(
    localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null
  );
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <UserContext.Provider value={value}>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/offer/:id" element={<OfferPage />} exact></Route>
          <Route path="/signin" element={<SigninPage />} exact />
          <Route path="/register" element={<RegisterPage />} exact />
          <Route element={<ProtectedRoutes />}>
            <Route path="/userInfo" element={<UserData />} exact />
            <Route
              path="/userReservations"
              element={<UserReservations />}
              exact
            />
            <Route path="/writeComment/:id" element={<WriteComment />} exact />
            <Route path="/userComments" element={<UserComments />} exact />
            <Route path="/updateComment/:id" element={<UpdateComment />} exact />
          </Route>
        </Routes>
        <BottomPage />
      </UserContext.Provider>
    </>
  );
}

export default App;
