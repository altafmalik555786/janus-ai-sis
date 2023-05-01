import { observer } from "mobx-react";
import style from "./style.module.scss";
import React, { memo, useState } from "react";
import { Button, Col, Divider, Form, Row } from "antd";
import LeftArrow from "@assets/icons/left-arrow.png";
import { useNavigate, useLocation } from "react-router-dom";
import { constRoute } from "@utils/route";
import { notification } from "@utils/notifications";
import CommonHeaderPercentCycle from "../../common-header-percent-cycle";
 import { useStore } from "@stores/root-store";
const ContextAndBaselineResults = observer(() => {
  const {
    user: {
      getconceptNotedataList,
      conceptNote,
      getLoadingConceptNote
    },
  } = useStore(null);
  const [generateResult, setRegenrateResult] = useState('')

  const navigate = useNavigate();
  const {state} = useLocation();
  const onFormSubmit = (values) => {
    console.log("values", values);
  };
const handleRegenratePayload=async()=>{
  const payload=  localStorage.getItem('conceptPayload')
const res=  await conceptNote(JSON.parse(payload), navigate);
setRegenrateResult(res?.response)
}
  return (
    <div className={style.mainContainer}>
        <CommonHeaderPercentCycle  percent={'8%'} conceptNoteSection={'B.1 Context and Baseline'}/> 

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
              <div className={style.pTageGroup}>
                <p className={style.pTagFive}>
                  Provide information on which climate risks/impacts the
                  intervention is designed to address.
                </p>
                <p className={style.pTagSix}>
                  Describe the main root causes and barriers (social, gender,
                  fiscal, regulatory, technological, financial, ecological,
                  institutional, etc.) that need to be addressed. 
                </p>
                <p className={style.pTagSeven}>
                  Be sure to include the number of beneficiaries the project is
                  expected to help.
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
      dangerouslySetInnerHTML={{__html: generateResult || state?.response|| ''}}
    />
              {/* <p>{state?.response || ''}</p> */}
            </div>
            <div className={style.footerButtonsDiv}>
              <div className={style.leftBtnContainer}>
                <Button
                  onClick={() => navigate(constRoute?.projectDescriptionForm)}
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
                  <button className={style.goBtn}  onClick={() =>
              navigate(constRoute?.contextAndBaselineForm)
            }
 >
               
                    <img src={LeftArrow} alt="left-arrow" /> Go Back
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

export default memo(ContextAndBaselineResults);
