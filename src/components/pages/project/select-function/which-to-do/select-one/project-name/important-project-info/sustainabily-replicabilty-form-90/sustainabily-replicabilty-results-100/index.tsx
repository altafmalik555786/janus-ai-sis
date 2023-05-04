import { observer } from "mobx-react";
import style from "./style.module.scss";
import React, { memo, useState } from "react";
import { Button, Col, Divider, Form, Row } from "antd";
import LeftArrow from "@assets/icons/left-arrow.png";
import { useLocation, useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import { notification } from "@utils/notifications";
import CommonHeaderPercentCycle from "../../common-header-percent-cycle";
import { useStore } from "@stores/root-store";
import CommonFooterButton from "../../commonfooterbutton";
const SustainabilityReplicabilityResult = observer(() => {
  const navigate = useNavigate();
const {state} = useLocation();
const [generateResult, setRegenrateResult] = useState('')
const {
  user: {
    getconceptNotedataList,
    conceptNote,
    getLoadingConceptNote
  },
} = useStore(null);
const [responseData] = useState(generateResult || state?.response);
const handleNext = ()=>{
  navigate(constRoute?.gcfCongratulation)
}
const handleRegenratePayload=async()=>{
  const payload=  localStorage.getItem('conceptPayload')
 const res= await conceptNote(JSON.parse(payload), navigate);
 setRegenrateResult(res?.response)
}
const handleGoBack=()=>{navigate(constRoute?.sustainabilityReplicabilityForm90)}
const handleSaveAndQuit = ()=> {
  notification.success("Save and Quit");
  navigate(constRoute?.home);
}
  return (
    <div className={style.mainContainer}>
      <CommonHeaderPercentCycle
        conceptNoteSection="C.3 Sustainability and Replicability of the Project 
(exit strategy)"
        percent="100%"
      />

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
      dangerouslySetInnerHTML={{__html:  responseData ||''}}
    />
              {/* <p>{state?.response || ''}</p> */}
            </div>
            <div className={style.wordCountWrraper}>
                  <p>Word Count: {responseData ? responseData?.split(' ')?.length : '0'}/1000</p>
              </div>
            <CommonFooterButton
              handleGoNext={handleNext}
             handleRegenrate={handleRegenratePayload}
             handlegoback={handleGoBack}
             handleSaveAndQuit={handleSaveAndQuit}
             isResult={true}
             isLoadingRegenrate={getLoadingConceptNote}
             />
            {/* <div className={style.footerButtonsDiv}>
              <div className={style.leftBtnContainer}>
                <Button
                  onClick={() => navigate(constRoute?.gcfCongratulation)}
                  className={style.nextButton}
                >
                  Next
                </Button>
                <Button onClick={() => handleRegenratePayload()}
                 className={style.reGenerate}
                 loading={getLoadingConceptNote}
                 disabled={getLoadingConceptNote}
                >
                  Regenerate
                </Button>
              </div>
              <div className={style.btnDiv}>
                <div className={style.twoBtnDiv}>
                  <button
                    className={style.goBtn}
                    onClick={() =>
                      navigate(constRoute?.sustainabilityReplicabilityForm90)
                    }
                  >
                
                    <img src={LeftArrow} alt="left-arrow" /> Go Back
                  </button>
                  <button
                    onClick={() => {
                      notification.success("Save and Quit");
                      navigate(constRoute?.home);
                    }}
                    className={style.saveBtn}
                  >
                    Save & Quit
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
});

export default memo(SustainabilityReplicabilityResult);
