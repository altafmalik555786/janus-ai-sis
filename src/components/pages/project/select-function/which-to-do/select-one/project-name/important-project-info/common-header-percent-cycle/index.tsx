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
      <Col md={8} sm={24}>
        <p className={style.pTageOne}>Project Name</p>
        <strong>{projectName}</strong>
      </Col>
      <Col md={8} sm={24}>
        <p className={style.pTageThree}>Concept Note Section</p>
        <strong> B.1. Context And Baseline</strong>
      </Col>
      <Col md={8} sm={24}>
        <p className={style.pTageTwo}>Percent Complete</p>
        <strong>0%</strong>
      </Col>
    </Row>
  );
};

export default CommonHeaderPercentCycle;
