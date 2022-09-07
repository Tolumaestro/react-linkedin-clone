import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="bg-[#f3f2ef] flex flex-col items-center">
      {/* Header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="flex max-w-[1200px] mt-[35px] mx-5">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
