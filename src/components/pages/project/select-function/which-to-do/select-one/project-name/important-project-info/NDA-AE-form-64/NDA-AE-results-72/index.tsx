import { observer } from "mobx-react";
import style from "./style.module.scss";
import React, { memo } from "react";
import { Button, Col, Divider, Form, Row } from "antd";
import LeftArrow from "@assets/icons/left-arrow.png";
import { useLocation, useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import { notification } from "@utils/notifications";
import CommonHeaderPercentCycle from "../../common-header-percent-cycle";
 import { useStore } from "@stores/root-store";
const ProjectDescriptionResults = observer(() => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const {
    user: {
      getconceptNotedataList,
      conceptNote,
      getLoadingConceptNote
    },
  } = useStore(null);
  const handleRegenratePayload=async()=>{
    const payload=  localStorage.getItem('conceptPayload')
    await conceptNote(JSON.parse(payload), navigate);
  }
  return (
    <div className={style.mainContainer}>
      <CommonHeaderPercentCycle  percent={'72%'} conceptNoteSection={'B.4 Engagement Among the NDA, AE and/or other'}/> 
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
            <div className={style.htmlContent}
              dangerouslySetInnerHTML={{__html: getconceptNotedataList}}
            />
              {/* <p>{state?.response || ''}</p> */}
            </div>
            <div className={style.footerButtonsDiv}>
              <div className={style.leftBtnContainer}>
                <Button
                  onClick={() => navigate(constRoute?.gcfJustificationForm72)}
                  className={style.nextButton}
                >
                  Next
                </Button>
                <Button loading={getLoadingConceptNote} disabled={getLoadingConceptNote} onClick={() => handleRegenratePayload()} className={style.reGenerate}>
                  Regenerate
                </Button>
              </div>
              <div className={style.btnDiv}>
                <div className={style.twoBtnDiv}>
                  <button
                    className={style.goBtn}
                    onClick={() => navigate(constRoute?.ndaAe64Form)}
                  >
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
