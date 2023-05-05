import React from "react";
import style from "./style.module.scss";
import { Col, Row } from "antd";
import ProjectName from '@assets/icons/todo-list.png'
import NoteIcon from '@assets/icons/note.png'
import TimerIcon from '@assets/icons/timer.png'
import { useStore } from "@stores/root-store";
import { truncate } from "@utils/common-functions";

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

  const { user: { getProjectNameData } } = useStore(null) 
const getProjectName = localStorage.getItem('projectName')
const projectNameData = JSON.parse(getProjectNameData)?.project_name || getProjectName || projectName
  return (
    <Row className={style.contextBaselineDiv}>
      <Col md={8} xs={24}>
        <p className={style.pTageOne}>Project Name</p>
        <strong style={{width: '90%', display: 'flex', flexWrap: 'wrap', wordBreak: 'break-all'}}>{projectNameData}</strong>
        <img src={ProjectName} alt="icon" />
      </Col>
      <Col md={8} xs={24}>
        <p className={style.pTageThree}>Concept Note Section</p>
        <strong title={conceptNoteSection?.length> 48 ? conceptNoteSection: ''}> {truncate(conceptNoteSection, 48) } </strong>
        <img src={NoteIcon} alt="icon" />
      </Col>
      <Col md={8} xs={24}>
        <p className={style.pTageTwo}>Percent Complete</p>
        <strong>{percent}</strong>
        <img src={TimerIcon} alt="icon" />
      </Col>
    </Row>
  );
};

export default CommonHeaderPercentCycle;
