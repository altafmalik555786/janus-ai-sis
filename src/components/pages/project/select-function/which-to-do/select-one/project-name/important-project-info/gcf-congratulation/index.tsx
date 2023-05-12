import React from "react";
import style from "./style.module.scss";
import { Col, Row } from "antd";
import { constRoute } from "@utils/route";
import LeftArrow from "@assets/icons/left-arrow.png";
import { useNavigate } from "react-router-dom";
import { notification } from "@utils/notifications";
import { useStore } from "@stores/root-store";
import GoBack from "@components/common-components/go-back";
const GCFCongratulation = () => {
  const navigate = useNavigate();
  const {
    user: {
      setConceptNoteLoading,
    },
  } = useStore(null); 
  return (
    <div className={style.gcfCongratulationContainer}>
      <Row> 
        <Col xs={1} md={4} sm={2} ></Col>
        <Col xs={22} md={16} sm={20} style={{marginBottom:71}}>
          <div className={style.congratulationBox}>
            <h1>Congratulations!</h1>
            <div className={style.firstParaContainer}>
              <p className={style.pOne}>
                You have successfully completed the  Concept Note questionnaire.
              </p>
            </div>
            <div className={style.exportPdfContainer}>
              <p>
                <span>Click here </span>to review all output generated for this concept note.
                Or, you can return to <span onClick={() => navigate(constRoute?.home)} >Home</span>.
              </p>
            </div>
          </div>
          {/* <button
            className={style.goBtn}
            onClick={() => {
              setConceptNoteLoading(false)
              navigate(constRoute?.sustainabilityReplicabilityResults100)}
            }
          >
           
            <img src={LeftArrow} alt="left-arrow" /> Go Back
          </button> */}
          
          <GoBack  className={style.goBtn} onClick={constRoute?.sustainabilityReplicabilityResults100} />
        </Col>
        <Col xs={1} md={4} sm={2}></Col>
      </Row>
    </div>
  );
};

export default GCFCongratulation; 
