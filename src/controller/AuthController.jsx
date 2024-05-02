import { useContext, useState } from "react";
import React from "react";
import LoginForm from "../view/LoginForm";
import { AuthContext } from "../model/providers/authprovider";
import { useNavigate } from "react-router-dom";
import userModel from "../model/UserModel";

function AuthController() {
  //useContext
  const [state, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("false");

  const onChange = (e) => {
    switch (e.target.id) {
      case "email":
        const email = e.target.value;
        setUserData({ ...userData, email: email });
        break;
      case "password":
        const password = e.target.value;
        setUserData({ ...userData, password: password });
        break;
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await userModel.login(userData.email, userData.password);
      dispatch({ type: "SAVE_TOKEN", payload: token });
      navigate("/");
      
    } catch (err) {
      console.log(`Login Error: ${err}`);
      setLoginError("true");
    }
  };

  return (
    <LoginForm
      onChange={onChange}
      onSubmit={onSubmit}
      email={userData.email}
      password={userData.password}
    />
  );
};

export default AuthController
