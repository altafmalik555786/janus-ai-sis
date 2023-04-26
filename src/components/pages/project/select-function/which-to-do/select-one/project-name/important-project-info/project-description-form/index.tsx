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
const ProjectDescriptionForm = observer(() => {
  const [form] = useForm();
  const navigate = useNavigate();
  const {
    user: {getProjectNameData, getLoadingConceptNote, conceptNote },
  } = useStore(null);
  const [projectName] = useState(JSON.parse(getProjectNameData)?.project_name)
  const onFormSubmit = async(values) => {
    const question ={
      q4: values?.q4||'',
      q5: values?.q5||'',
    }
    const payload = {
      section: `B_2_8`,
      questions: question,
      project_name: projectName || ''
    }
    const response = await conceptNote(payload)
    if(response?.response){
    navigate(constRoute?.projectDescriptionResults,  { state: { response: response?.response} });
    }
  };

  return (
    <div className={style.mainContainer}>
      <CommonHeaderPercentCycle projectName={"Brazil Climate Security"} percent={'8%'} conceptNoteSection={'B.2 Project/Programme Description'}/> 

      <div className={style.barContentContainer}>
        <div className={style.layoutDiv}>
          <div className={style.siderStyle}>
            <div className={style.sideInnerDiv}>
              <div className={style.importantDiv}>
                <p className={style.pTagFour}>Important</p>
                <button className={style.btnClass}>
                  <img
                    src={CloseIcon}
                    className={style.closeIconImg}
                    alt="fd"
                  />
                </button>
              </div>
              <div className={style.pTageGroup}>
                <p className={style.pTagFive}>
                  Based on the information you supplied, CFC will formulate the
                  theory of change and provide information on how it serves to
                  shift the development pathway toward a more low-emissions
                  and/or climate resilient direction, in line with the Fund’s
                  goals and objectives. 
                </p>
                <p className={style.pTagSix}>
                  For the Accredited Entity(ies) section, discuss the
                  implementation arrangements for project governance,
                  coordination and management and which organizations were
                  involved in the process.
                </p>
                {/* <p className={style.pTagSeven}>
                  Be sure to include the number of beneficiaries the project is
                  expected to help.
                </p> */}
              </div>
              <Divider />
            </div>
          </div>
        </div>

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
                  label="4. Describe the expected set of components/outputs and subcomponents/activities to address the previously discussed barriers identified that will lead to the expected outcomes."
                  name={"q4"}
                  
                >
                  <CommonInput
                    inputType="textarea"
                    placeholder= "Leave blank if you want Climate Finance Co-pilot to supply suggested components/outputs and subcomponents"
                    className={style.emailInput}
                  />
                </Form.Item>
                <Form.Item
                  label="5. What is the name of the Accredited Entity(ies) and describe the implementation arrangements with the executing entity(ies) and implementing partners."
                  name={"q5"}
                 
                >
                  <CommonInput
                    inputType="textarea"
                    placeholder="Leave blank if you want Climate Finance Co-pilot to supply suggested components/outputs and subcomponents"
                    className={style.emailInput}
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
                    onClick={() => navigate(constRoute?.importantProjectInfo)}
                  >
                    {" "}
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

export default memo(ProjectDescriptionForm);
