import React from "react";
import style from "./style.module.scss";
import { Col, Row } from "antd";

export interface HeaderTypes {
  projectName?: string;
  percent?: string;
  conceptNoteSection?: string;
}

const CommonHeaderPercentCycle = ({
  projectName = "Your Project Name",
  percent = "--%",
  conceptNoteSection = "Your Concept Note Section",
}: HeaderTypes) => {
  return (
    <Row className={style.contextBaselineDiv}>
        <Col md={8} sm={24} >
          <p className={style.pTageOne}>
            Project Name: <strong>{projectName}</strong>
          </p>
        </Col>
        <Col md={8} sm={24} >
          {" "}
          <p className={style.pTageThree}>
            Concept Note Section:<strong> B.1. Context And Baseline</strong>
          </p>
        </Col>
        <Col md={8} sm={24} >
          {" "}
          <p className={style.pTageTwo}>
            Percent Complete: <strong>0%</strong>
          </p>
        </Col>
    </Row>
  );
};

export default CommonHeaderPercentCycle;
