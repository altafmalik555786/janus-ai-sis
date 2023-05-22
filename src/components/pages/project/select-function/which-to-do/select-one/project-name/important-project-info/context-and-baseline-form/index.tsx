import { observer } from "mobx-react";
import style from "./style.module.scss";
import React, { memo, useEffect, useState } from "react";
import { Button, Col, Divider, Form, Row } from "antd";
import LeftArrow from "@assets/icons/left-arrow.png";
import CloseIcon from "@assets/icons/closeIcon.png";
import { useForm } from "antd/es/form/Form";
import { CommonInput } from "@components/common-components/input";
import { validateMessages } from "@utils/json-data";
import { useLocation, useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import { notification } from "@utils/notifications";
import { useStore } from "@stores/root-store";
import CommonHeaderPercentCycle from "../common-header-percent-cycle";
import CommonImportantSideBar from "../importantSideBar/common-important-sidebar";
import CommonFooterButton from "../commonfooterbutton";

const ContextAndBaselineForm = observer(() => { 
  const location = useLocation();
  const [form] = useForm();
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const {
    user: {
      getProjectNameData,
      getLoadingConceptNote,
      getProjectDataList,
      conceptNote,
      setConceptNoteLoading,
    },
  } = useStore(null);
  const [projectName] = useState(JSON.parse(getProjectNameData)?.project_name);
  const getProjectName = localStorage.getItem('projectName')
useEffect(() => {
  if (localStorage.getItem('AllAnswers') === null) {localStorage.setItem('AllAnswers', JSON.stringify([{q1a:"", q1b:"", q2:"",q3:""}]))}
    if(localStorage.getItem('allResults') === null){
      localStorage.setItem('allResults', JSON.stringify([{result1: ""}]))
    }
}, [])
  const onFormSubmit = async (values) => {
    
     localStorage.setItem('AllAnswers', JSON.stringify([{q1a:values?.q1a || "",q1b:values?.q1b || "", q2:values?.q2 || "",q3:values?.q3 || ""}]))
    const question = {
      q1a: values?.q1a || "",
      q1b: values?.q1b || "",
      q2: values?.q2 || "",
      q3: values?.q3 || "",
    };
    const payload = {
      section: `B_1_0`,
      questions: question,
      project_name: projectName || getProjectName || "",
    };
    localStorage.setItem('conceptPayload', JSON.stringify(payload))
    const response = await conceptNote(payload, navigate);
    if (response?.response) {
      navigate(constRoute?.contextAndBaselineResults, {
        state: { response: response?.response },
      });
      if(localStorage.getItem('allResults') === null){
        localStorage.setItem('allResults', JSON.stringify([{result1: response?.response || ""}]))
      }else{
        const getReultsfromls = JSON.parse(localStorage.getItem('allResults'));
        const addResults =  getReultsfromls && getReultsfromls?.map((item) => {
           return {
             ...item,
             result1: response?.response
           }
         })
         localStorage.setItem('allResults', JSON.stringify(addResults))
      }
    }
  };
  const getAnswers = JSON.parse(localStorage.getItem('AllAnswers'));
  const handleSave = ()=>{
    setConceptNoteLoading(false)
    // notification.success("Save and Quit");
    navigate(constRoute?.home);
  }
  const handleback=()=>{
    setConceptNoteLoading(false)
    navigate(constRoute?.projectName)
  }
  return (
    <div className={style.mainContainer}>
      <CommonHeaderPercentCycle
        percent={"0%"}
        conceptNoteSection={"B.1 Context and Baseline"}
        ribonBg={'#00792A'}
        documentTypeStyle={{color:'#FFFFFF', opacity:'80%'}}
        documentTypeSubHeading={'#FFFFFF'}
      />

      <div className={style.barContentContainer}>
        <CommonImportantSideBar 
        title={'Important'}
        fristPara={` Provide information on which climate risks/impacts the
        intervention is designed to address.`}
        secondParagraph={`  Describe the main root causes and barriers (social, gender,
          fiscal, regulatory, technological, financial, ecological,
          institutional, etc.) that need to be addressed. `}
          thirdParagraph={`Be sure to include the number of beneficiaries the project
          is expected to help.`}
        />
      {/* {show && (
        <div className={style.layoutDiv}>
          <div className={style.siderStyle}>
            <div className={style.sideInnerDiv}>
              <div className={style.importantDiv}>
                <p className={style.pTagFour}>Important</p>
                <button
                  className={style.btnClass}
                  onClick={() => setShow(!show)}
                >
                  <img
                    src={CloseIcon}
                    className={style.closeIconImg}
                    alt="fd"
                  />
                </button>
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
                    Be sure to include the number of beneficiaries the project
                    is expected to help.
                  </p>
                </div>
              
              <Divider />
            </div>
          </div>
        </div>
        )} */}
        <div className={style.contentContainer}>
          <div className={style.innerContentContainer}>
            <h1>Please Fill In the Blanks Below:</h1>

            <div className={style.dataContentBox}>
              <Form
                className={style.formData}
                form={form}
                autoComplete="false"
                onFinish={onFormSubmit}
                validateMessages={validateMessages}
                layout="vertical"
                initialValues={{
                  q1a: getProjectDataList?.q1a || getAnswers && getAnswers[0]?.q1a || "",
                  q1b: getProjectDataList?.q1b || getAnswers && getAnswers[0]?.q1b || "",
                  q2: getProjectDataList?.q2 || getAnswers && getAnswers[0]?.q2 || "",
                  q3: getProjectDataList?.q3 || getAnswers && getAnswers[0]?.q3 || "",
                }}
              > 
                <Form.Item
                  label="1a). Project/Programme Region or country name*"
                  name={"q1a"}
                >
                  <CommonInput
                    inputType="textarea"
                    autoSizeCheck={{ minRows: 7, maxRows: 7 }}
                    className={style.emailInput}
                  />
                </Form.Item>
                <Form.Item
                  label="1b). State whether the Project is Adaptation or Mitigation*"
                  name={"q1b"}
                >
                  <CommonInput
                    inputType="textarea"
                    autoSizeCheck={{ minRows: 7, maxRows: 7 }}
                    className={style.emailInput}
                  />
                </Form.Item>
                <Form.Item
                  label="2. Describe the climate vulnerabilities and impacts, GHG emissions profile, and mitigation and adaptation needs that the prospective intervention is envisaged to address."
                  name={"q2"}
                > 
                  <CommonInput
                    inputType="textarea"
                    autoSizeCheck={{ minRows: 7, maxRows: 7 }}
                    className={style.fontSizeInput}
                  />
                </Form.Item>
                <Form.Item
                  label="3. Describe the main root causes and barriers (social, gender, fiscal, regulatory, technological, financial,   ecological, institutional, etc.) that need to be addressed."
                  name={"q3"}
                >
                  <CommonInput
                    inputType="textarea"
                    autoSizeCheck={{ minRows: 7, maxRows: 7 }}
                    className={style.fontSizeInput}
                  />
                </Form.Item>
              </Form>
            </div>
            {/* <div className={style.footerButtonsDiv}>
              <Form form={form} onFinish={onFormSubmit}>
                <Button
                  loading={getLoadingConceptNote}
                  disabled={getLoadingConceptNote}
                  htmlType="submit"
                  className={style.nextButton}
                >
                  Submit
                </Button>
              </Form>
              <div className={style.btnDiv}>
                <div className={style.twoBtnDiv}>
                  <button
                    className={style.goBtn}
                    onClick={() => navigate(constRoute?.projectName)}
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
          <CommonFooterButton
            isLoadingSubmit={getLoadingConceptNote}
            handleSubmit={onFormSubmit}
            handlegoback={handleback}
            handleSaveAndQuit={handleSave}
            // handleQuickNext={constRoute?.contextAndBaselineResults}
            form={form}
            />
        </div>
      </div>
    </div>
  );
});

export default memo(ContextAndBaselineForm);
