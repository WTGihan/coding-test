import React from "react";
import { Typography, Button, Input, Form } from "antd";

import "./authenticationForm.css";

interface AuthenticationFormProps {
  data: any;
  onChange: any;
  onClick: any;
}

const AuthenticationForm: React.FC<AuthenticationFormProps> = ({
  data,
  onChange,
  onClick,
}) => {
  return (
    <div className="auth-form-container">
      <div className="auth-form-container-body">
        <Form>
          <Typography className="auth-form-title">Log in with email</Typography>
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
            Login
          </Button>
        </Form>
        <Button
          type="primary"
          shape="round"
          size={"middle"}
          className="auth-form-button auth-form-signup-button"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default AuthenticationForm;
