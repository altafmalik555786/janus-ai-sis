import { observer } from "mobx-react";
import React from "react";
import style from "./style.module.scss";
import { Col, Row } from "antd";

const Home = observer(() => {
  return (
    <div className={style.homePagePageContainer}>
      <div className={style.homePageContainer}>
        <h1>Welcome to Climate Finance Copilot</h1>
        <div className={style.paraContainer}>
          <p>Your expert advisor for all things climate finance.</p>
          <p>Start by selecting one of the options below.</p>
          </div>

          <Row className={style.boxesContiner} gutter={20}>
            <Col span={12} md={24}>
              <div className={style.newProject} >
                <h4> New Project </h4>
              </div>
            </Col>
            <Col span={12} md={24}>
              <div className={style.existingProject} >
                <h4>Open Existing Project</h4>
              </div>
            </Col>
          </Row>
      </div>
    </div>
  );
});

export default Home;
