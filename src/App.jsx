import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth"
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { auth } from "./app/firebaseInit";
import { login, logout, selectUser } from "./app/store/userSlice";

import HomeScreen from "./components/Home/HomeScreen";
import SignInScreen from "./components/Auth/SignInScreen";
import ProfileScreen from "./components/Profile/ProfileScreen";

const App = () => {
  const user = useSelector(selectUser)
  const [userAuth] = useAuthState(auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if(userAuth) {
      dispatch(login({
        uid: userAuth.uid,
        email: userAuth.email
      }))
    } else {
      dispatch(logout)
    }
  }, [dispatch, userAuth])

  const router = user ? <HomeScreen /> : <SignInScreen />;
  const profileRouter = user ? <ProfileScreen /> : <SignInScreen />

  return (
    <Routes>
      <Route path="/" element={router} />
      <Route path="profile" element={profileRouter} />
    </Routes>
  );
};

export default App;
