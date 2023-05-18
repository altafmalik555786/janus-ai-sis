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
    user: {
      getProjectNameData,
      setConceptNoteLoading,
      getLoadingConceptNote,
      conceptNote,
    },
  } = useStore(null);
  const [projectName] = useState(JSON.parse(getProjectNameData)?.project_name);
  const getProjectName = localStorage.getItem("projectName");

  useEffect(() => {
    if (localStorage.getItem("AllAnswers") === null) {
      localStorage.setItem("AllAnswers", JSON.stringify([{ q4: "", q5: "" }]));
    }
  }, []);

  const onFormSubmit = async (values) => {
    const getAnswers = JSON.parse(localStorage.getItem("AllAnswers"));
    const addMoreAnswers = getAnswers?.map((item) => {
      return {
        ...item,
        q4: values?.q4,
        q5: values?.q5,
      };
    });
    const question = {
      q4: values?.q4 || "",
      q5: values?.q5 || "",
    };
    localStorage.setItem("AllAnswers", JSON.stringify(addMoreAnswers));

    const payload = {
      section: `B_2_8`,
      questions: question,
      project_name: projectName || getProjectName || "",
    };
    localStorage.setItem("conceptPayload", JSON.stringify(payload));
    const response = await conceptNote(payload, navigate);
    if (response?.response) {
      navigate(constRoute?.projectDescriptionResults, {
        state: { response: response?.response },
      });

    const getReultsfromls = JSON.parse(localStorage.getItem('allResults'));
     const addResults =  getReultsfromls && getReultsfromls?.map((item) => {
        return {
          ...item,
          result2: response?.response || ""
        }
      })
      localStorage.setItem('allResults', JSON.stringify(addResults))

    }
  };
  const handleSave = () => {
    setConceptNoteLoading(false);
    // notification.success("Save and Quit");
    navigate(constRoute?.home);
  };
  const handleback = () => {
    setConceptNoteLoading(false);
    navigate(constRoute?.contextAndBaselineResults);
  };
  const getAnswers = JSON.parse(localStorage.getItem("AllAnswers"));
  return (
    <div className={style.mainContainer}>
      <CommonHeaderPercentCycle
        percent={"8%"}
        conceptNoteSection={"B.2 Project/Programme Description"}
      />

      <div className={style.barContentContainer}>
        <CommonImportantSideBar
          title={"Important"}
          fristPara={`Based on the information you supplied, CFC will formulate the
        theory of change and provide information on how it serves to
        shift the development pathway toward a more low-emissions
        and/or climate resilient direction, in line with the Fund’s
        goals and objectives. `}
          secondParagraph={` For the Accredited Entity(ies) section, discuss the
        implementation arrangements for project governance,
        coordination and management and which organizations were
        involved in the process.`}
        />
        {/* {show && ( 
        <div className={style.layoutDiv}>
          <div className={style.siderStyle}>
            <div className={style.sideInnerDiv}>
              <div className={style.importantDiv}>
                <p className={style.pTagFour}>Important</p>
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
                  q4: (getAnswers && getAnswers[0]?.q4) || "",
                  q5: (getAnswers && getAnswers[0]?.q5) || "",
                }}
              >
                <Form.Item
                  label="4. Describe the expected set of components/outputs and subcomponents/activities to address the previously discussed barriers identified that will lead to the expected outcomes."
                  name={"q4"}
                >
                  <CommonInput
                    inputType="textarea"
                    autoSizeCheck={{ minRows: 7, maxRows: 7 }}
                    placeholder="Leave blank if you want Climate Finance Co-pilot to supply suggested components/outputs and subcomponents"
                    className={style.fontSizeInput}
                  />
                </Form.Item>
                <Form.Item
                  label="5. What is the name of the Accredited Entity(ies) and describe the implementation arrangements with the executing entity(ies) and implementing partners."
                  name={"q5"}
                >
                  <CommonInput
                    inputType="textarea"
                    autoSizeCheck={{ minRows: 7, maxRows: 7 }}
                    placeholder="Leave blank if you want Climate Finance Co-pilot to supply suggested components/outputs and subcomponents"
                    className={style.fontSizeInput}
                  />
                </Form.Item>
              </Form>
            </div>
            {/*  
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
                    onClick={() => navigate(constRoute?.contextAndBaselineResults)}
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
              form={form}
              // handleQuickNext={constRoute?.projectDescriptionResults}
            />
        </div>
      </div>
    </div>
  );
});

export default memo(ProjectDescriptionForm);
