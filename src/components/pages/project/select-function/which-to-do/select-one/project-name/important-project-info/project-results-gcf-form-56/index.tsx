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
    const question ={
      q11: values?.q11||'',
    }
    const payload = {
      section: `B_3_56`,
      questions: question,
      project_name: projectName || getProjectName|| ''
    }
    localStorage.setItem('conceptPayload', JSON.stringify(payload))
    const response = await conceptNote(payload, navigate)
    if(response?.response){
    navigate(constRoute?.projectResultsGcfResults64,  { state: { response: response?.response} });
    }
  };

  const handleSave = ()=>{
    // notification.success("Save and Quit");
    navigate(constRoute?.home);
    setConceptNoteLoading(false)
  }
  const handleback=()=>{
    setConceptNoteLoading(false)
    navigate(constRoute?.projectResultsGcfResults56)
  }
  return (
    <div className={style.mainContainer}>
     <CommonHeaderPercentCycle  percent={'56%'} conceptNoteSection={'B.3 Expected Project Results Aligned with the GCF'}/> 
      <div className={style.barContentContainer}>
        <CommonImportantSideBar
        title={'Quick Tips'}
        fristPara={` Explain the economic and financial viability of the
                  project/programme by including economic and financial
                  analyses, to include: internal rate of return; Financial
                  viability in the long run;  business and strategy for phasing
                  out GCF capital AND the Application of best practices and
                  degree of innovation`}/>
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
                  Explain the economic and financial viability of the
                  project/programme by including economic and financial
                  analyses, to include: internal rate of return; Financial
                  viability in the long run;  business and strategy for phasing
                  out GCF capital AND the Application of best practices and
                  degree of innovation
                </p>
                here also below two p tag does not show on this page
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
              >
                <Form.Item
                  label="11. Briefly Discuss The Project’s Efficiency and Effectiveness."
                  name={"q11"}
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
                      navigate(constRoute?.projectResultsGcfResults56)
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
