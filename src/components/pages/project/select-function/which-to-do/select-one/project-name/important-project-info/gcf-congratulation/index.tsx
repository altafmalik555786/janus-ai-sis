import React from "react";
import style from "./style.module.scss";
import { Col, Row } from "antd";
import { constRoute } from "@utils/route";
import LeftArrow from "@assets/icons/left-arrow.png";
import { useNavigate } from "react-router-dom";

const GCFCongratulation = () => {
  const navigate = useNavigate();
  
  return (
    <div className={style.gcfCongratulationContainer}>
      <Row> 
        <Col xs={1} md={4} sm={2} ></Col>
        <Col xs={22} md={16} sm={20}>
          <div className={style.congratulationBox}>
            <h1>Congratulations!</h1>
            <div className={style.firstParaContainer}>
              <p className={style.pOne}>
                You have successfully completed the  Concept Note questionnaire.
              </p>
            </div>
            <div className={style.exportPdfContainer}>
              <p>
                <span>Click here</span> to get the exportable pdf of this GCF
                Draft Concept Note. Or, you can return to <span onClick={() => navigate(constRoute?.home)} >Home</span>.
              </p>
            </div>
          </div>
          <button
            className={style.goBtn}
            onClick={() => navigate(constRoute?.sustainabilityReplicabilityResults100)}
          >
            {" "}
            <img src={LeftArrow} alt="left-arrow" /> Go Back
          </button>
        </Col>
        <Col xs={1} md={4} sm={2}></Col>
      </Row>
    </div>
  );
};

export default GCFCongratulation;
