import { observer } from "mobx-react";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import a5 from "@assets/images/welcomeWhite.png";
import { Button } from "antd";

const StartingPage = observer(() => {
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
          Experience a New and Transformational Way to Win Funding For Climate Adaptation/Mitigation projects.
          </p>
          <div className={style.mainButton}>
            <Button className={style.LoginButton}>Log in</Button>
            <Button className={style.SignButton}>Sign Up</Button>
          </div>
        </div>
      </div>
    </>
  );
});

export default memo(StartingPage);
