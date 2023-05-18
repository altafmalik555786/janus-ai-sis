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

const ProjectDescriptionForm = observer(() => {
  const [form] = useForm();
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const {
    user: {getProjectNameData, setConceptNoteLoading, getLoadingConceptNote, conceptNote },
  } = useStore(null);
  const [projectName] = useState(JSON.parse(getProjectNameData)?.project_name)
  const getProjectName = localStorage.getItem('projectName')
  useEffect(() => {
    if (localStorage.getItem('AllAnswers') === null) {localStorage.setItem('AllAnswers', JSON.stringify([{q12:''}]))}
  }, [])
  const onFormSubmit = async(values) => {
    const getAnswers = JSON.parse(localStorage.getItem('AllAnswers'));
    const addMoreAnswers = getAnswers?.map((item) => {
      return {
        ...item,
        q12:values?.q12,
      }
    })
    const question ={
      q12: values?.q12||'',
    }
  localStorage.setItem('AllAnswers',JSON.stringify(addMoreAnswers));
    const payload = {
      section: `B_4_64`,
      questions: question,
      project_name: projectName ||getProjectName|| ''
    }
    localStorage.setItem('conceptPayload', JSON.stringify(payload))
    const response = await conceptNote(payload, navigate)
    if(response?.response){
    navigate(constRoute?.ndaAeResults72,  { state: { response: response?.response} });
    const getReultsfromls = JSON.parse(localStorage.getItem('allResults'));
    const addResults =  getReultsfromls && getReultsfromls?.map((item) => {
      return {
        ...item,
        result9: response?.response || ""
      }
    })
    localStorage.setItem('allResults', JSON.stringify(addResults))
    }
  };
  const handleSave = ()=>{
    setConceptNoteLoading(false)
    // notification.success("Save and Quit");
    navigate(constRoute?.home);
  }
  const handleback=()=>{
    setConceptNoteLoading(false)
    navigate(constRoute?.projectResultsGcfResults64)
  }
  const getAnswers = JSON.parse(localStorage.getItem('AllAnswers'));
  return (
    <div className={style.mainContainer}>
     <CommonHeaderPercentCycle  percent={'64%'} conceptNoteSection={'B.4 Engagement Among the NDA, AE and/or other'}/> 
      <div className={style.barContentContainer}>
        <CommonImportantSideBar
        title={'Quick Tips'}
        fristPara={`  If you want for Climate Finance Copilot to offer a notional
                  engagement mode for this project/programme, then leave the
                  input box blank. `}/>
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
                  If you want for Climate Finance Copilot to offer a notional
                  engagement mode for this project/programme, then leave the
                  input box blank. 
                </p>
                // this text is not showing in this page
                <p className={style.pTagSix}>
                  Highlight stakeholder engagement with national and local
                  stakeholders, e.g. national ministries, the Accredited Entity,
                  the National Designated Authority, as well as civil society,
                  academia and other stakeholders for the particular project.
                </p>
                <p className={style.pTagSeven}>
                  Be sure to include the number of beneficiaries the project is
                  expected to help.
                </p>
                // uper code is comment that not show on this page  these two paragreaph
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
                  q12:  getAnswers && getAnswers[0]?.q12 || "",
                }}
              >
                <Form.Item 
                  label="12. Please describe how engagement among the NDA, AE and/or other relevant stakeholders in the country has taken place."
                  name={"q12"}
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
                    onClick={() =>
                      navigate(constRoute?.projectResultsGcfResults64)
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
          <CommonFooterButton
            isLoadingSubmit={getLoadingConceptNote}
            handleSubmit={onFormSubmit}
            handlegoback={handleback}
            handleSaveAndQuit={handleSave}
            handleQuickNext={constRoute?.ndaAeResults72}
            form={form}
            customStyle={{position:'absolute'}}
            />
        </div>
      </div>
    </div>
  );
});

export default memo(ProjectDescriptionForm);
