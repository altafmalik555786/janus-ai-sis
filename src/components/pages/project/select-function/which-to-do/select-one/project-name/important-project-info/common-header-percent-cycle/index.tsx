import React from "react";
import style from "./style.module.scss";
import { Col, Row } from "antd";
import ProjectName from '@assets/icons/todo-list.png'
import NoteIcon from '@assets/icons/note.png'
import TimerIcon from '@assets/icons/timer.png'

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
      <Col sm={8} xs={24}>
        <p className={style.pTageOne}>Project Name</p>
        <strong>{projectName}</strong>
        <img src={ProjectName} alt="icon" />
      </Col>
      <Col sm={8} xs={24}>
        <p className={style.pTageThree}>Concept Note Section</p>
        <strong> {conceptNoteSection} </strong>
        <img src={NoteIcon} alt="icon" />
      </Col>
      <Col sm={8} xs={24}>
        <p className={style.pTageTwo}>Percent Complete</p>
        <strong>{percent}</strong>
        <img src={TimerIcon} alt="icon" />
      </Col>
    </Row>
  );
};

export default CommonHeaderPercentCycle;
