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

const gcfJustificationForm = observer(() => {
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
      q12a: values?.q12a||'',
      q12b: values?.q12b||'',
      q12c: values?.q12c||''
    }
    const payload = {
      section: `C_2_72`,
      questions: question,
      project_name: projectName|| getProjectName || ''
    }
    localStorage.setItem('conceptPayload', JSON.stringify(payload))
    const response = await conceptNote(payload, navigate)
    if(response?.response){
    navigate(constRoute?.gcfJustificationResults90,  { state: { response: response?.response} });
    }
  };
  const handleSave = ()=>{
    notification.success("Save and Quit");
    navigate(constRoute?.home);
  }
  const handleback=()=>{
    navigate(constRoute?.ndaAeResults72)
  }
  return (
    <div className={style.mainContainer}>
     <CommonHeaderPercentCycle  percent={'72%'} conceptNoteSection={'C.2 Justification of GCF Funding Request'}/> 
      <div className={style.barContentContainer}>
        <CommonImportantSideBar
         fristPara={` ** The justification for grants and reimbursable grants is
         mandatory. **`} 
         secondParagraph={` In your discussion on “alternative funding options” Include an
                  analysis  of the barriers for the potential beneficiaries to
                  access to finance and the constraints of public and private
                  sources of  funding. `}
         thirdParagraph ={ `In your “rationale and level of concessionality” discussion
         justify why this is the minimum required to make the
         investment viable and most efficient considering the
         incremental cost or risk premium of the Project/ Programme. `}
         forthParagraph={` Lastly, In the case of private sector proposal, concessional
         terms should be minimized and justified as per the Guiding
         principles applicable to the private sector operations.`}

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
                  ** The justification for grants and reimbursable grants is
                  mandatory. **
                </p>
                <p className={style.pTagSix}>
                  In your discussion on “alternative funding options” Include an
                  analysis  of the barriers for the potential beneficiaries to
                  access to finance and the constraints of public and private
                  sources of  funding. 
                </p>
                <p className={style.pTagSeven}>
                  In your “rationale and level of concessionality” discussion
                  justify why this is the minimum required to make the
                  investment viable and most efficient considering the
                  incremental cost or risk premium of the Project/ Programme. 
                </p>

                <p className={style.pTagSeven}>
                  Lastly, In the case of private sector proposal, concessional
                  terms should be minimized and justified as per the Guiding
                  principles applicable to the private sector operations.
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
                  label= {<span>{'12a) Explain why the project requires GCF funding, i.e. explaining why this is not financed by the public and/ or private sector(s) of the country.'}<span style={{color: 'red'}}>*</span></span>}
                  name={"q12a"}
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

                    className={style.fontsizeInput}
                  />
                </Form.Item>
                <Form.Item
                  label="12b) Describe alternative funding options for the same activities being proposed."
                  name={"q12b"}
                >
                  <CommonInput
                    inputType="textarea"
                    autoSizeCheck={{ minRows: 7, maxRows: 7 }}

                    placeholder="Leave blank if you want Climate Finance Co-pilot to supply suggested narratives to give you a head start on completing this section."
                    className={style.fontsizeInput}
                  />
                </Form.Item>
                <Form.Item
                  label="12c) Justify the rationale and level of concessionality of the GCF financial instrument(s) as well as how this will be passed on to the end-users and beneficiaries."
                  name={"q12c"}
                >
                  <CommonInput
                    inputType="textarea"
                    autoSizeCheck={{ minRows: 7, maxRows: 7 }}

                    placeholder="Leave blank if you want Climate Finance Co-pilot to supply suggested narratives to give you a head start on completing this section."
                    className={style.fontsizeInput}
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
                    onClick={() => navigate(constRoute?.ndaAeResults72)}
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
 
export default memo(gcfJustificationForm);
