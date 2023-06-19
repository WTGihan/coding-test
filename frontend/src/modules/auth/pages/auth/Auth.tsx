import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { useNavigate } from "react-router-dom";

import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import Authentication from "../../components/authentication/Authentication";
import AuthenticationForm from "../../components/authenticationForm/AuthenticationForm";
import TokenService from "../../../../services/Token";

import "./auth.css";
import { login, loginSuccess, signUp, signUpSuccess } from "../../slices/auth";
import { AUTH_TYPE } from "../../../../constants/auth";

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [authStage, setAuthStatges] = useState("base");

  const { actionType } = useAppSelector((state) => state.auth.auth);

  useEffect(() => {
    if (actionType === loginSuccess.type || actionType === signUpSuccess.type) {
      const { email } = TokenService.getUser();
      if (email && email === loginUser.email) {
        navigate("/resturant");
      }
    }
    // eslint-disable-next-line
  }, [actionType, dispatch]);

  const onChange = (event: any) => {
    const valueType = event.target.name;
    const value = event.target.value;
    setLoginUser({
      ...loginUser,
      [`${valueType}`]: value,
    });
  };

  const onClick = () => {
    if (authStage === AUTH_TYPE.LOGIN) {
      const loginUserData = {
        email: loginUser.email,
        password: loginUser.password,
      };

      dispatch(login(loginUserData)).catch((error: Error) => {
        console.error("An error occurred while login:", error);
      });
    }
    if (authStage === AUTH_TYPE.SIGNUP) {
      const signupUserData = {
        username: loginUser.username,
        email: loginUser.email,
        password: loginUser.password,
      };

      dispatch(signUp(signupUserData)).catch((error: Error) => {
        console.error("An error occurred while signup:", error);
      });
    }
  };

  const onChangeStage = (value: string) => {
    setAuthStatges(value);
    setLoginUser({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <Header searchIsAvailable={false} />
      {authStage === AUTH_TYPE.BASE && (
        <Authentication onChangeStage={onChangeStage} />
      )}
      {(authStage === AUTH_TYPE.LOGIN || authStage === AUTH_TYPE.SIGNUP) && (
        <AuthenticationForm
          authStage={authStage}
          data={loginUser}
          onChange={onChange}
          onClick={onClick}
          onChangeStage={onChangeStage}
        />
      )}
      <Footer />
    </div>
  );
};

export default Auth;
