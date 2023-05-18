import { observer } from "mobx-react";
import style from "./style.module.scss";
import React, { memo, useEffect, useState } from "react";
import { Button, Col, Divider, Form, Row } from "antd";
import LeftArrow from "@assets/icons/left-arrow.png";
import { useLocation, useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import { notification } from "@utils/notifications";
import CommonHeaderPercentCycle from "../../common-header-percent-cycle";
import { useStore } from "@stores/root-store";
import CommonFooterButton from "../../commonfooterbutton";
const ProjectDescriptionResults = observer(() => {
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
    setRegenrateResult(res?.response);
    const getReultsfromls = JSON.parse(localStorage.getItem('allResults'));
    const addResults =  getReultsfromls && getReultsfromls?.map((item) => {
       return {
         ...item,
         result10: res?.response
       }
     })
     localStorage.setItem('allResults', JSON.stringify(addResults))
  }
const [responseData] = useState(generateResult || state?.response);

useEffect(() => {
  if(localStorage.getItem('allResults') === null){
    localStorage.setItem('allResults', JSON.stringify([{result10: state?.response || ""}]))
  }
}, [])
  const handleSave = ()=>{
    setConceptNoteLoading(false)
    // notification.success("Save and Quit");
    navigate(constRoute?.home);
  }
  const handleback=()=>{
    setConceptNoteLoading(false)
    navigate(constRoute?.gcfJustificationForm72)
  }
  const handleNext = ()=>{
    setConceptNoteLoading(false)
    navigate(constRoute?.sustainabilityReplicabilityForm90)
  }
const results = JSON.parse(localStorage.getItem('allResults'));
return (
  <div>
    <div className={style.mainContainer}>
      <CommonHeaderPercentCycle conceptNoteSection="C.2 Justification of GCF Funding Request" percent="90%" />
      <div className={style.barContentContainer}>
        <div className={style.contentContainer}>
          <div className={style.innerContentContainer}>
            <h1>Your Results</h1>
 
            <div className={style.dataContentBox}>
            <div className={style.htmlContent}
      dangerouslySetInnerHTML={{__html: responseData  || results ? results[0]?.result10 : ''}}
    />
              {/* <p>{state?.response || ''}</p> */}
            </div>
              <div className={style.wordCountWrraper}>
                  <p>Word Count: {responseData ? responseData?.split(' ')?.length : '0'}/1000</p>
              </div>
           
          </div>
        </div>
      </div>
    </div>
    <CommonFooterButton
              handleGoNext={handleNext}
             handleRegenrate={handleRegenratePayload}
             handlegoback={handleback}
             handleSaveAndQuit={handleSave}
             isResult={true}
             isLoadingRegenrate={getLoadingConceptNote}
             />
    </div>
  );
}); 

export default memo(ProjectDescriptionResults);
