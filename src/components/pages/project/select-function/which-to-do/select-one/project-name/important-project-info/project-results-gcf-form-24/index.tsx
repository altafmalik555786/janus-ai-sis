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
  const [projectName] = useState(JSON.parse(getProjectNameData)?.project_name)
  const getProjectName = localStorage.getItem('projectName')
  const onFormSubmit = async(values) => {
    const getAnswers = JSON.parse(localStorage.getItem('AllAnswers'));
    const addMoreAnswers = getAnswers?.map((item) => {
      return {
        ...item,
        q7:values?.q7,
      }
    })
    const question ={
      q7: values?.q7||'',

    }
  localStorage.setItem('AllAnswers',JSON.stringify(addMoreAnswers));

    const payload = {
      section: `B_3_24`,
      questions: question,
      project_name: projectName || getProjectName|| ''
    }
    localStorage.setItem('conceptPayload', JSON.stringify(payload))
    const response = await conceptNote(payload, navigate)
    if(response?.response){
      navigate(constRoute?.projectResultsGcfResults32,  { state: { response: response?.response} });
    }
    
  };
  const handleSave = ()=>{
    setConceptNoteLoading(false)
    // notification.success("Save and Quit");
    navigate(constRoute?.home);
  }
  const handleback=()=>{
    setConceptNoteLoading(false)
    navigate(constRoute?.projectResultsGcfResults)
  }
  const getAnswers = JSON.parse(localStorage.getItem('AllAnswers'));
  return (
    <div className={style.mainContainer}>
         <CommonHeaderPercentCycle  percent={'24%'} conceptNoteSection={'B.3 Expected Project Results Aligned with the GCF'}/> 


      <div className={style.barContentContainer}>
        <CommonImportantSideBar 
        title={'Quick Tips'}
        fristPara={`Describe the potential for project to catalyse action beyond
                  the GCF-funded project.`}
        secondParagraph={`Climate Finance Co-pilot (CFC) will generate suggestions on 
        how the project or its activities can be scaled up or
        replicated, as well as generate plans for knowledge sharing
        and how the project contributes to national policies and
        strategies or regulatory frameworks.`}   
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
                  Describe the potential for project to catalyse action beyond
                  the GCF-funded project. 
                </p>
                <p className={style.pTagSix}>
                  Climate Finance Co-pilot (CFC) will generate suggestions on 
                  how the project or its activities can be scaled up or
                  replicated, as well as generate plans for knowledge sharing
                  and how the project contributes to national policies and
                  strategies or regulatory frameworks.
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
                  q7:  getAnswers && getAnswers[0]?.q7 || "",
                }}
              >
                <Form.Item
                  label="7. Briefly Describe The Paradigm Shift Potential of the Project."
                  name={"q7"}
                 
                >
                  <CommonInput
                    inputType="textarea"
                    autoSizeCheck={{ minRows: 7, maxRows: 7 }}

                    placeholder="Leave blank if you want Climate Finance Co-pilot to supply suggested narratives to give you a head start on completing this section."
                    className={style.fontSizeInput}
                  /> 
                </Form.Item>
                {/* <Form.Item
                  label="5. What is the name of the Accredited Entity(ies) and describe the implementation arrangements with the executing entity(ies) and implementing partners."
                  name={"ies"}
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <CommonInput
                    inputType="textarea"
                    autoSizeCheck={{ minRows: 7, maxRows: 7 }}

                    className={style.emailInput}
                  />
                </Form.Item> */}
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
                <Button loading={getLoadingConceptNote} disabled={getLoadingConceptNote}  htmlType="submit" className={style.nextButton}>
                  Submit
                </Button>
              </Form>
              <div className={style.btnDiv}>
                <div className={style.twoBtnDiv}>
                  <button
                    className={style.goBtn}
                    onClick={() =>
                      navigate(constRoute?.projectResultsGcfResults)
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

export default memo(ProjectGCFForm); 
