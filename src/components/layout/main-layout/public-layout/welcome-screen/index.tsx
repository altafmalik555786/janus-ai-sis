import { observer } from "mobx-react";
import React, { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import a5 from "@assets/images/welcomeWhite.png";
import { Button } from "antd";
import { constRoute } from "@utils/route";
import { useStore } from "@stores/root-store";

const WelcomeScreen = observer(() => {
  const navigate = useNavigate();

  return (
    <>
      <div className={style.main}>
        <div className={style.authHeadeer}>
          <div className={style.authHeadeerLogo}>
            <img className={style.authHeadeerLogoImg} src={a5}></img>
          </div>
          <h1 className={style.authHeaderTitle}>
            Welcome to Climate Finance Copilot
          </h1>
          <p className={style.authHeaderSubtitle}>
            Experience a New and Transformational Way to Win Funding For Climate
            Adaptation/Mitigation projects.
          </p>
          <div className={style.mainButton}>
            <Button
              onClick={() => navigate(constRoute?.login)}
              className={style.LoginButton}
            >
              Log in
            </Button>
            <Button
              onClick={() => navigate(constRoute?.signup)}
              className={style.SignButton}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
});

export default memo(WelcomeScreen);
