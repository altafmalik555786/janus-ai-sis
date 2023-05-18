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
import useWindowSize from "@utils/hooks/useWindowSize";
const ProjectDescriptionForm = observer(() => {
  const [form] = useForm();
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const getProjectName = localStorage.getItem('projectName')
  const screenWidth = useWindowSize().width;
  const {
    user: {getProjectNameData,setConceptNoteLoading, getLoadingConceptNote, conceptNote },
  } = useStore(null);
  const [projectName] = useState(JSON.parse(getProjectNameData)?.project_name);
  useEffect(() => {
    if (localStorage.getItem('AllAnswers') === null) {localStorage.setItem('AllAnswers', JSON.stringify([{q6:''}]))}
  }, [])

  const onFormSubmit = async(values) => {
    const getAnswers = JSON.parse(localStorage.getItem('AllAnswers'));
    const addMoreAnswers = getAnswers?.map((item) => {
      return {
        ...item,
        q6:values?.q6,
      }
    })
    const question ={
      q6: values?.q6||'',

    }
  localStorage.setItem('AllAnswers',JSON.stringify(addMoreAnswers));

    const payload = {
      section: `B_3_16`,
      questions: question,
      project_name: projectName ||getProjectName || ''
    }
    localStorage.setItem('conceptPayload', JSON.stringify(payload))
    const response = await conceptNote(payload, navigate)
    navigate(constRoute?.projectResultsGcfResults,  { state: { response: response?.response} });
    // navigate(constRoute?.projectResultsGcfResults);
    const getReultsfromls = JSON.parse(localStorage.getItem('allResults'));
     const addResults =  getReultsfromls && getReultsfromls?.map((item) => {
        return {
          ...item,
          result3: response?.response || ""
        }
      })
      localStorage.setItem('allResults', JSON.stringify(addResults))
  };
  const handleSave = ()=>{
    setConceptNoteLoading(false)
    // notification.success("Save and Quit");
    navigate(constRoute?.home);
  }
  const handleback=()=>{
    setConceptNoteLoading(false)
    navigate(constRoute?.projectDescriptionResults)
  }
  const getAnswers = JSON.parse(localStorage.getItem('AllAnswers'));
  return (
    <div className={style.mainContainer}>
     <CommonHeaderPercentCycle  percent={'16%'} conceptNoteSection={'B.3 Expected Project Results Aligned with the GCF'}/> 

      <div className={style.barContentContainer}>
        <CommonImportantSideBar
        title={'Quick Tips'}
        fristPara={` Provide quantitative and qualitative information on the
                  potential impact of project/programme, e.g. tonnes of CO2e
                  avoided or reduced, number of beneficiaries, number of people
                  affected by climate impacts. (Be as specific as possible about
                  who the beneficiaries are.)`}/>
      {/* {show && (
        <div className={style.layoutDiv}>
          <div className={style.siderStyle}>
            <div className={style.sideInnerDiv}>
              <div className={style.importantDiv}>
                <p className={style.pTagFour}>Quick Tips</p>
                <button className={style.btnClass}  onClick={() => setShow(!show)}>
                  <img
                    src={CloseIcon}
                    className={style.closeIconImg}
                    alt="fd"
                  />
                </button>
              </div>
              <div className={style.pTageGroup}>
                <p className={style.pTagFive}>
                  Provide quantitative and qualitative information on the
                  potential impact of project/programme, e.g. tonnes of CO2e
                  avoided or reduced, number of beneficiaries, number of people
                  affected by climate impacts. (Be as specific as possible about
                  who the beneficiaries are.)
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
                  q6:  getAnswers && getAnswers[0]?.q6 || "",
                }}
              >
                <Form.Item
                  label= {<span>6. Briefly Describe The <span style={{fontStyle:'italic'}}>Impact Potential</span> of the Project.<span style={{color:'red'}}>*</span></span>}
                  name={"q6"}
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
                    onClick={() => navigate(constRoute?.projectDescriptionResults)}
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
          <CommonFooterButton
            isLoadingSubmit={getLoadingConceptNote}
            handleSubmit={onFormSubmit}
            handlegoback={handleback}
            handleSaveAndQuit={handleSave}
            form={form}
            // handleQuickNext={constRoute?.projectResultsGcfResults}
            customStyle={{position:(screenWidth > 770) ? 'absolute' : 'inherit'}}
            />
        </div>
      </div>
    </div>
  );
}); 

export default memo(ProjectDescriptionForm);
