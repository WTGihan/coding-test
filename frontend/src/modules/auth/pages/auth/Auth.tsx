import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { useNavigate } from "react-router-dom";

import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import Authentication from "../../components/authentication/Authentication";
import AuthenticationForm from "../../components/authenticationForm/AuthenticationForm";
import TokenService from "../../../../services/Token";

import "./auth.css";
import { login, loginSuccess } from "../../slices/auth";

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const [authStage, setAuthStatges] = useState("base");

  const { actionType } = useAppSelector((state) => state.auth.auth);

  useEffect(() => {
    if (actionType === loginSuccess.type) {
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
    const loginUserData = {
      email: loginUser.email,
      password: loginUser.password,
    };

    dispatch(login(loginUserData)).catch((error: Error) => {
      console.error("An error occurred while login:", error);
    });
  };

  const onChangeStage = (value: string) => {
    setAuthStatges(value);
  };

  return (
    <div className="container">
      <Header searchIsAvailable={false} />
      {authStage === "base" && <Authentication onChangeStage={onChangeStage} />}
      {authStage === "login" && (
        <AuthenticationForm
          onChange={onChange}
          data={loginUser}
          onClick={onClick}
        />
      )}
      <Footer />
    </div>
  );
};

export default Auth;
