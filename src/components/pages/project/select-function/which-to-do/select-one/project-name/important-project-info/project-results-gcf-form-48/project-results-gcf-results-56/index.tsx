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
const ProjectGCFResults = observer(() => {
  const navigate = useNavigate();
  const [generateResult, setRegenrateResult] = useState('')

  const {state} = useLocation();
  const {
    user: {
      getconceptNotedataList,
      conceptNote,
      setConceptNoteLoading,
      getLoadingConceptNote
    },
  } = useStore(null);
  
  const handleRegenratePayload=async()=>{
    const payload=  localStorage.getItem('conceptPayload')
    const res = await conceptNote(JSON.parse(payload), navigate);
    setRegenrateResult(res?.response)
  }
  const handleSave = ()=>{
    setConceptNoteLoading(false)
    notification.success("Save and Quit");
    navigate(constRoute?.home);
  }
  const handleback=()=>{
    setConceptNoteLoading(false)
    navigate(constRoute?.projectResultsGcfForm48)
  }
  const handleNext = ()=>{
    setConceptNoteLoading(false)
    navigate(constRoute?.projectResultsGcfForm56)
  }
  return (
    <div className={style.mainContainer}>
        <CommonHeaderPercentCycle  percent={'56%'} conceptNoteSection={'B.3 Expected Project Results Aligned with the GCF'}/> 

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
      dangerouslySetInnerHTML={{__html:  generateResult || state?.response ||''}}
    />
              {/* <p>{state?.response || ''}</p> */}
            </div>
            <CommonFooterButton
              handleGoNext={handleNext}
             handleRegenrate={handleRegenratePayload}
             handlegoback={handleback}
             handleSaveAndQuit={handleSave}
             isResult={true}
             isLoadingRegenrate={getLoadingConceptNote}
             />
            {/* <div className={style.footerButtonsDiv}>
              <div className={style.leftBtnContainer}>
                <Button
                  onClick={() => navigate(constRoute?.projectResultsGcfForm56)}
                  className={style.nextButton}
                >
                  Next
                </Button>
                <Button
                  onClick={() => handleRegenratePayload()}
                  className={style.reGenerate}
                  loading={getLoadingConceptNote}
                  disabled={getLoadingConceptNote}
                >
                  Regenerate
                </Button>
              </div>
              <div className={style.btnDiv}>
                <div className={style.twoBtnDiv}>
                  <button className={style.goBtn} onClick={() => navigate(constRoute?.projectResultsGcfForm48)} >
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
 
export default memo(ProjectGCFResults);
