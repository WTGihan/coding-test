import React from "react";
import { Typography, Button } from "antd";

import { ReactComponent as FacebookIcon } from "../../../../assets/facebook.svg";
import { ReactComponent as EmailIcon } from "../../../../assets/email.svg";

import "./authentication.css";

interface AuthenticationProps {
  onChangeStage: any;
}

const Authentication: React.FC<AuthenticationProps> = ({ onChangeStage }) => {
  return (
    <div className="auth-container">
      <div className="auth-container-body">
        <Typography className="auth-title">Sign up or log in</Typography>
        <Button
          type="primary"
          shape="round"
          icon={<FacebookIcon className="auth-facebook-button-icon" />}
          size={"middle"}
          className="auth-button auth-facebook-button"
        >
          Continue With Facebook
        </Button>
        <Button
          type="primary"
          shape="round"
          icon={<div className="auth-google-button-icon" />}
          size={"middle"}
          className="auth-button auth-google-button"
        >
          Continue With Google
        </Button>
        <div className="auth-sub-container">
          <span className="auth-sub-text-container">
            <Typography className="auth-sub-text">or</Typography>
          </span>
        </div>

        <Button
          type="primary"
          shape="round"
          icon={<EmailIcon className="auth-email-button-icon" />}
          size={"middle"}
          className="auth-button auth-email-button"
          onClick={() => onChangeStage("login")}
        >
          Continue with email
        </Button>
        <div className="auth-note-text-container">
          <Typography className="auth-note-text">
            By continuing you agree to our{" "}
            <span className="auth-note-text-link">T&Cs</span>. Please also check
            out our
            <span className="auth-note-text-link"> Privacy Policy</span>. We use
            your data to offer you a personalised experience and to better
            understand and improve our services.
          </Typography>
          <Typography className="auth-note-text">
            <span className="auth-note-text-link">
              For more information see here.
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
