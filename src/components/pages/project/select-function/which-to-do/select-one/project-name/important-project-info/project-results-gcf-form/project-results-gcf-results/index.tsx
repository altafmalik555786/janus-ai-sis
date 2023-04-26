import { observer } from "mobx-react";
import style from "./style.module.scss";
import React, { memo } from "react";
import { Button, Col, Divider, Form, Row } from "antd";
import LeftArrow from "@assets/icons/left-arrow.png";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import { notification } from "@utils/notifications";

const ProjectDescriptionResults = observer(() => {
  const navigate = useNavigate();

  const onFormSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.contextBaselineDiv}>
        <div>
          <p className={style.pTageOne}>
            Project Name: <strong>Brazil Climate Security</strong>
          </p>
          <p className={style.pTageTwo}>
            Percent Complete: <strong>24%</strong>
          </p>
        </div>
        <div>
          <p className={style.pTageThree}>
            Concept Note Section:<strong> B.3.  Expected project results aligned with the GCF</strong>
          </p>
        </div>
      </div>

      <div className={style.barContentContainer}>
        {/* <div className={style.layoutDiv}>
          <div className={style.siderStyle}>
            <div className={style.sideInnerDiv}>
              <div className={style.importantDiv}>
                <p className={style.pTagFour}>
                  Below is a list of sources which informed the generated
                  narrative: 
                </p>
              </div>
              <Divider />
            </div>
          </div>
        </div> */}

        <div className={style.contentContainer}>
          <div className={style.innerContentContainer}>
            <h1>Your Results</h1>

            <div className={style.dataContentBox}>
              <p>GPT-4 Response here...</p>
            </div>
            <div className={style.footerButtonsDiv}>
              <div className={style.leftBtnContainer}>
                <Button
                  onClick={() => navigate(constRoute?.projectResultsGcfForm24)}
                  className={style.nextButton}
                >
                  Next
                </Button>
                <Button
                  onClick={() => {}}
                  className={style.reGenerate}
                >
                  Regenerate
                </Button>
              </div>
              <div className={style.btnDiv}>
                <div className={style.twoBtnDiv}>
                  <button className={style.goBtn} onClick={() => navigate(constRoute?.projectResultsGcfForm)} >
                    {" "}
                    <img src={LeftArrow} alt="left-arrow" /> Go Back
                  </button>
                  <button
                    onClick={() => {
                      notification.success("Saved and quitted");
                      navigate(constRoute?.home);
                    }}
                    className={style.saveBtn}
                  >
                    Save & Quit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default memo(ProjectDescriptionResults);
