import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
              })
            );
          });
      })
      .catch((err) => alert(err));
  };
  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((err) => alert(err));
  };

  const formClass = "w-[350px] h-[50px] text-[20px] pl-[10px]";

  return (
    <div className="flex flex-col items-center justify-center min-h-[91vh] max-h-screen ">
      <img
        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
        alt="LinkedIn Logo"
        className=" object-contain h-[70px] my-5"
      />

      <form className="flex flex-col space-y-6">
        <input
          placeholder="Full name (required if registering)"
          type="text"
          className={formClass}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          className={formClass}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className={formClass}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={loginToApp}
          className="w-[365px] h-[50px] text-xl text-[#fff] bg-[#0074b1] rounded-[5px]"
        >
          Sign In
        </button>
      </form>

      <p className="mt-5">
        Not a member?{" "}
        <span className=" cursor-pointer text-[#0177b7]" onClick={register}>
          Register Now
        </span>{" "}
      </p>
    </div>
  );
};

export default Login;
