import { observer } from "mobx-react";
import style from "./style.module.scss";
import React, { memo, useState } from "react";
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

const ProjectGCFForm = observer(() => {
  const [form] = useForm();
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const {
    user: {getProjectNameData,setConceptNoteLoading, getLoadingConceptNote, conceptNote },
  } = useStore(null);
  const [projectName] = useState(JSON.parse(getProjectNameData)?.project_name);
  const getProjectName = localStorage.getItem('projectName')
  const onFormSubmit = async(values) => {
    const getAnswers = JSON.parse(localStorage.getItem('AllAnswers'));
    const addMoreAnswers = getAnswers?.map((item) => {
      return {
        ...item,
        q10a:values?.q1,
        q10b:values?.q2,
        q10c:values?.q3,
      }
    })
    const question ={
      q10a: values?.q1||'',
      q10b: values?.q2||'',
      q10c: values?.q3||''
    }
  localStorage.setItem('AllAnswers',JSON.stringify(addMoreAnswers));
    const payload = {
      section: `B_3_48`,
      questions: question,
      project_name: projectName || getProjectName|| ''
    }
    localStorage.setItem('conceptPayload', JSON.stringify(payload))
    const response = await conceptNote(payload, navigate)
    if(response?.response){
    navigate(constRoute?.projectResultsGcfResults56,  { state: { response: response?.response} });
    }
  };
  
  const handleSave = ()=>{
    setConceptNoteLoading(false)
    notification.success("Save and Quit");
    navigate(constRoute?.home);
  }
  const handleback=()=>{
    setConceptNoteLoading(false)
    navigate(constRoute?.projectResultsGcfResults48)
  }
  const getAnswers = JSON.parse(localStorage.getItem('AllAnswers'));
  return (
    <div className={style.mainContainer}>
    <CommonHeaderPercentCycle  percent={'48%'} conceptNoteSection={'B.3 Expected Project Results Aligned with the GCF'}/> 

      <div className={style.barContentContainer}>
        <CommonImportantSideBar
        title={'Quick Tips'}
        fristPara={` Demonstrate how the intervention aligns with national
                  policies, strategies and/or frameworks, e.g. alignment of
                  project activities with achievement of the NDC.`}
                  secondParagraph={` Highlight stakeholder engagement with national and local
                  stakeholders, e.g. national ministries, the Accredited Entity,
                  the National Designated Authority, as well as civil society,
                  academia and other stakeholders for the particular project. `}
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
                  Demonstrate how the intervention aligns with national
                  policies, strategies and/or frameworks, e.g. alignment of
                  project activities with achievement of the NDC. 
                </p>
                <p className={style.pTagSix}>
                  Highlight stakeholder engagement with national and local
                  stakeholders, e.g. national ministries, the Accredited Entity,
                  the National Designated Authority, as well as civil society,
                  academia and other stakeholders for the particular project.
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
                  q1:  getAnswers && getAnswers[0]?.q10a || "",
                  q2:  getAnswers && getAnswers[0]?.q10b || "",
                  q3:  getAnswers && getAnswers[0]?.q10c || "",
                }}
              >
                <Form.Item
                  label= {<span>{`10a) Briefly Describe Country Ownership of the Project.`}<span style={{color: 'red'}}>*</span></span>}
                  name={"q1"}
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <CommonInput
                    inputType="textarea"
                    autoSizeCheck={{ minRows: 7, maxRows: 7 }}

                    className={style.fontSizeInput}
                  />
                </Form.Item>
                <Form.Item
                  label="10b) What is the AE’s experience working in the project country of implementation or a similar context."
                  name={"q2"}
                >
                  <CommonInput
                    inputType="textarea"
                    autoSizeCheck={{ minRows: 7, maxRows: 7 }}

                    placeholder="Leave blank if you want Climate Finance Co-pilot to supply suggested narratives to give you a head start on completing this section."
                    className={style.fontSizeInput}
                  />
                </Form.Item>
                <Form.Item
                  label="10c) What is the AE/EE experience in implementing similar projects/ intervention."
                  name={"q3"}
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
                    onClick={() =>
                      navigate(constRoute?.projectResultsGcfResults48)
                    }
                  >
                    {" "}
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
 
export default memo(ProjectGCFForm);
