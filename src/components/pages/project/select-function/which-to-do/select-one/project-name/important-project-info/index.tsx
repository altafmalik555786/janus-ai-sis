import { observer } from "mobx-react"; 
import style from "./style.module.scss";
import LeftArrow from "@assets/icons/left-arrow.png";
import React, { memo, useState } from "react";
import { Button, Checkbox } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import { useStore } from "@stores/root-store";
import { notification } from "@utils/notifications";
import SaveQuit from "@components/common-components/save-quit";
import GoBack from "@components/common-components/go-back";

const ImportantProjectInfo = observer(() => {
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false);
  const {
    user: { projectSave, isLoadingProjectSave, resetProjectData },
  } = useStore(null);
  const [error, setError] = useState(false);
  const {state} = useLocation();
  const nextSubmitHandler = async () => {
    if (isChecked) {
      resetProjectData();
      const payload = {
        project_name: state?.projectName,
        functionality: "concept note",
      };
      const response = await projectSave(payload, navigate);
      if (response?.message?.includes("project saved successfully")) {
        localStorage.removeItem('AllAnswers')
        localStorage.removeItem('allResults')
        navigate(constRoute?.contextAndBaselineForm);
      }
    } else {
      setError(true);
    }
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.containerWrapper}>
        <div className={style.container}>
          <h2 className={style.hTwo}>Important</h2>
          <div className={style.mainPdiv}> 
            <p className={style.pTagOne}> 
            Please be advised that the narratives produced by Climate Finance Copilot are intended to serve as informative and thought-provoking tools during the drafting of your Concept Note/Proposal. They should not be regarded as definitive responses for your submission. We urge you to utilize this tool in conjunction with your own expertise and knowledge to generate a submission that is both compelling and fully compliant with the Green Climate Fund (GCF) grading criteria.

            </p>

            <p className={style.pTagTwo}>
            The principal benefit of utilizing Climate Finance Copilot for this task is its ability to present examples of narratives that fully conform to the GCF scoring manual and are more likely to resonate with the GCF evaluators.

            </p>
            <p className={style.pTagThree}>
            Furthermore, it is essential to note that the quality of the AI-generated narratives is contingent upon the quality of the input narratives. We strongly recommend ensuring that your input is of the highest quality and precisely reflects your project's objectives. Please check the ‘Agree’ box to acknowledge the notice, then click on ‘Next’ to proceed.

            </p>
          </div>
          <div className={style.checkBoxDiv}>
            <Checkbox 
            className={style.checkBox}
              onChange={(e) => {
                setIsChecked(e.target.checked);
                setError(false)
              }}
            ></Checkbox>
            <p className={style.checkBoxPTag}>I agree to the notice and the information provided </p>
          </div>
          {error && <p style={{color:'red', marginLeft:40, paddingBottom:10, marginTop: '4px'}}>Please Check the checkbox </p>}
        </div>
        <div className={style.nextButtonDiv}>
          <Button loading={isLoadingProjectSave} disabled={isLoadingProjectSave} onClick={nextSubmitHandler}  className={isChecked ? style.nextButton : style.nextDisableBtn}>
            Next
          </Button>
        </div>
      </div>
      <div className={style.btnDiv}>
        <div className={style.twoBtnDiv} >
          <GoBack onClick={constRoute?.projectName} className={style.goBtn} />
          {/* <button className={style.goBtn}  onClick={() =>
              navigate(constRoute?.projectName)
            }
 >
            <img src={LeftArrow} alt="left-arrow" /> Go Back
          </button> */}
          {/* <SaveQuit onClick={constRoute?.home} /> */}
          {/* <button
                    onClick={() => {
                      notification.success("Save and Quit");
                      navigate(constRoute?.home);
                    }}
                    className={style.saveBtn}
                  >
                    Save & Quit
                  </button> */}
        </div>
      </div>
    </div>
  );
});

export default memo(ImportantProjectInfo);
