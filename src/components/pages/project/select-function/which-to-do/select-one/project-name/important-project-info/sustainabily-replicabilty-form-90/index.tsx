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

const SustainabilityReplicabilityForm = observer(() => {
  const [form] = useForm();
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const {
    user: {getProjectNameData, getLoadingConceptNote, conceptNote },
  } = useStore(null);
  const [projectName] = useState(JSON.parse(getProjectNameData)?.project_name)
  const getProjectName = localStorage.getItem('projectName')
  const onFormSubmit = async(values) => {
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
  return (
    <div className={style.mainContainer}>

      <CommonHeaderPercentCycle conceptNoteSection="C.3 Sustainability and Replicability of the Project 
(exit strategy)" percent="90%" />

      <div className={style.barContentContainer}>
      {show && (
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
                      Develop a robust monitoring and evaluation framework
                    </li>
                  </ul>
                   
                </p>
                {/* 
                <p className={style.pTagSeven}>
                  In your “rationale and level of concessionality” discussion
                  justify why this is the minimum required to make the
                  investment viable and most efficient considering the
                  incremental cost or risk premium of the Project/ Programme. 
                </p>

               */}
              </div>
              <Divider />
            </div>
          </div>
        </div>
      )}
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
              >
                <Form.Item
                  label= {<span>{'13a) Please explain how the project/programme sustainability will be ensured in the long run and how this will be monitored, after the project/programme is implemented with support from the GCF and other sources.'}<span style={{color: 'red'}}>*</span></span>}
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
            <div className={style.footerButtonsDiv}>
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
                      notification.success("Saved and quitted");
                      navigate(constRoute?.home);
                    }}
                    className={style.saveBtn}
                  >
                    Save & Quit
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
 
export default memo(SustainabilityReplicabilityForm);
