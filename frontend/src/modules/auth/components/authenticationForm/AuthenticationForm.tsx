import React from "react";
import { Typography, Button, Input, Form } from "antd";

import "./authenticationForm.css";
import { AUTH_TYPE } from "../../../../constants/auth";

interface AuthenticationFormProps {
  authStage: string;
  data: any;
  onChange: any;
  onClick: any;
  onChangeStage: any;
}

const AuthenticationForm: React.FC<AuthenticationFormProps> = ({
  authStage,
  data,
  onChange,
  onClick,
  onChangeStage,
}) => {
  return (
    <div className="auth-form-container">
      <div className="auth-form-container-body">
        <Form>
          <Typography className="auth-form-title">
            {authStage === AUTH_TYPE.LOGIN
              ? "Login in with email"
              : "SignUp in with email"}
          </Typography>
          {authStage === "signup" && (
            <div className="auth-form-input-container">
              <Typography className="auth-form-input-label">
                Username
              </Typography>
              <Input
                placeholder="e.g. Alex John"
                className="auth-form-input"
                name="username"
                value={data.username}
                onChange={onChange}
              />
            </div>
          )}
          <div className="auth-form-input-container">
            <Typography className="auth-form-input-label">
              Email address
            </Typography>
            <Input
              placeholder="e.g. name@example.com"
              className="auth-form-input"
              name="email"
              type="email"
              value={data.email}
              onChange={onChange}
            />
          </div>
          <div className="auth-form-input-container">
            <Typography className="auth-form-input-label">Password</Typography>
            <Input
              placeholder="Password"
              className="auth-form-input"
              name="password"
              type="password"
              value={data.password}
              onChange={onChange}
            />
          </div>
          <Button
            type="primary"
            shape="round"
            size={"middle"}
            className="auth-form-button auth-form-login-button"
            disabled={false}
            onClick={onClick}
          >
            {authStage === AUTH_TYPE.LOGIN ? "Login" : "Sign Up"}
          </Button>
        </Form>
        <Button
          type="primary"
          shape="round"
          size={"middle"}
          className="auth-form-button auth-form-signup-button"
          onClick={() =>
            onChangeStage(
              authStage === AUTH_TYPE.LOGIN ? AUTH_TYPE.SIGNUP : AUTH_TYPE.LOGIN
            )
          }
        >
          {authStage === AUTH_TYPE.LOGIN ? "Sign Up" : "Login"}
        </Button>
      </div>
    </div>
  );
};

export default AuthenticationForm;
