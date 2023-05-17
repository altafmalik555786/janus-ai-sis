import { observer } from "mobx-react";
import style from "./style.module.scss";
import React, { memo, useEffect, useState } from "react";
import { Button, Col, Divider, Form, Row } from "antd";
import LeftArrow from "@assets/icons/left-arrow.png";
import CloseIcon from "@assets/icons/closeIcon.png";
import { useForm } from "antd/es/form/Form";
import { CommonInput } from "@components/common-components/input";
import { validateMessages } from "@utils/json-data";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import { notification } from "@utils/notifications";
import CommonHeaderPercentCycle from "../common-header-percent-cycle";
import { useStore } from "@stores/root-store";
import CommonImportantSideBar from "../importantSideBar/common-important-sidebar";
import CommonFooterButton from "../commonfooterbutton";

const SustainabilityReplicabilityForm = observer(() => {
  const [form] = useForm();
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const {
    user: {getProjectNameData, setConceptNoteLoading, getLoadingConceptNote, conceptNote },
  } = useStore(null);
  const [projectName] = useState(JSON.parse(getProjectNameData)?.project_name)
  const getProjectName = localStorage.getItem('projectName');
  const dummyArrayOfImportantSIdeBarList = [
    `Identify key sustainability objectives and indicators.`,
    `Develop a sustainability strategy.`,
    `Establish partnerships.`,
    `Ensure community ownership.`,
    ` Develop a robust monitoring and evaluation framework`
  ];
  useEffect(() => {
    if (localStorage.getItem('AllAnswers') === null) {localStorage.setItem('AllAnswers', JSON.stringify([{q13a:'',q13b:''}]))}
  }, [])
  const onFormSubmit = async(values) => {
    const getAnswers = JSON.parse(localStorage.getItem('AllAnswers'));
    const addMoreAnswers = getAnswers ? getAnswers?.map((item) => {
      return {
        ...item,
        q13a:values?.q13a,
        q13b:values?.q13b,
      }
    }) : [];
  localStorage.setItem('AllAnswers',JSON.stringify(addMoreAnswers));
    const question ={
      q13a: values?.q13a||'',
      q13b: values?.q13b||'',
    }
    const payload = {
      section: `C_3_90`,
      questions: question,
      project_name: projectName || getProjectName|| ''
    }
    localStorage.setItem('conceptPayload', JSON.stringify(payload))
    const response = await conceptNote(payload, navigate)
    if(response?.response){
    navigate(constRoute?.sustainabilityReplicabilityResults100,  { state: { response: response?.response} });
    }
  };
  const handleback=()=>{
    setConceptNoteLoading(false)
    navigate(constRoute?.gcfJustificationResults90)
  }
  const handleSave = ()=>{
    setConceptNoteLoading(false)
    // notification.success("Save and Quit");
    navigate(constRoute?.home);
  }
  const getAnswers = JSON.parse(localStorage.getItem('AllAnswers'));
  return (
    <div className={style.mainContainer}>

      <CommonHeaderPercentCycle conceptNoteSection="C.3 Sustainability and Replicability of the Project 
(exit strategy)" percent="90%" />

      <div className={style.barContentContainer}>
        <CommonImportantSideBar
        title={'Quick Tips'}
        fristPara={` A climate project/programme sustainability plan is critical
        for ensuring the long-term success and impact of a
        project/programme. Here are some topics to consider as you
        prepare to write this plan:  `}
        isList={true}
        listArray={dummyArrayOfImportantSIdeBarList}
        />
      {/* {show && (
        <div className={style.layoutDiv}>
          <div className={style.siderStyle}>
            <div className={style.sideInnerDiv}>
              <div className={style.importantDiv}>
                <p className={style.pTagFour}>Quick Tips</p>
                <button className={style.btnClass} onClick={() => setShow(!show)}>
                  <img
                    src={CloseIcon}
                    className={style.closeIconImg}
                    alt="fd"
                  />
                </button>
              </div>
              <div className={style.pTageGroup}>
                <p className={style.pTagFive}> 
                  A climate project/programme sustainability plan is critical
                  for ensuring the long-term success and impact of a
                  project/programme. Here are some topics to consider as you
                  prepare to write this plan:  
                </p>
                <p className={style.pTagSix}>
                  <ul>
                    <li>
                      Identify key sustainability objectives and indicators.
                    </li>
                    <li>Develop a sustainability strategy.</li>
                    <li>Establish partnerships.</li>
                    <li>Ensure community ownership.</li>
                    <li>
                      Develop a robust monitoring and evaluation framework.
                    </li>
                  </ul>
                   
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
                  q13a:  getAnswers && getAnswers[0]?.q13a || "",
                  q13b:  getAnswers && getAnswers[0]?.q13b || "",
                }}
              >
                <Form.Item
                  label= {<span>{'13a) Please explain how the project/programme sustainability will be ensured in the long run and how this will be monitored after the project/programme is implemented with support from the GCF and other sources.'}<span style={{color: 'red'}}>*</span></span>}
                  name={"q13a"}
                  rules={[
                    {
                      required: true,
                      message: "This field is required"
                    },
                  ]}
                >
                  <CommonInput
                    inputType="textarea"
                    autoSizeCheck={{ minRows: 7, maxRows: 7 }}

                    className={style.fontSizeInput}
                  />
                </Form.Item>
                <Form.Item
                  label="13b) For non-grant instruments, explain how the capital invested will be repaid and over what duration of time."
                  name={"q13b"}
                >
                  <CommonInput
                    inputType="textarea"
                    autoSizeCheck={{ minRows: 7, maxRows: 7 }}

                    placeholder="Leave blank if you want Climate Finance Co-pilot to supply suggested narratives to give you a head start on completing this section."
                    className={style.fontSizeInput}
                  />
                </Form.Item>
              
              </Form> 
            </div>
            <CommonFooterButton
            isLoadingSubmit={getLoadingConceptNote}
            handleSubmit={onFormSubmit}
            handlegoback={handleback}
            handleSaveAndQuit={handleSave}
            handleQuickNext={constRoute?.sustainabilityReplicabilityResults100}
            form={form}
            />

            {/* <div className={style.footerButtonsDiv}>
              <Form form={form} onFinish={onFormSubmit}>
                <Button loading={getLoadingConceptNote} disabled={getLoadingConceptNote} htmlType="submit" className={style.nextButton}>
                  Submit
                </Button>
              </Form>
              <div className={style.btnDiv}>
                <div className={style.twoBtnDiv}>
                  <button
                    className={style.goBtn}
                    onClick={() => navigate(constRoute?.gcfJustificationResults90)}
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
 
export default memo(SustainabilityReplicabilityForm);
