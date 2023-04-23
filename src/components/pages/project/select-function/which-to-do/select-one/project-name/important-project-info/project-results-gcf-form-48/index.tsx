import { observer } from "mobx-react";
import style from "./style.module.scss";
import React, { memo } from "react";
import { Button, Col, Divider, Form, Row } from "antd";
import LeftArrow from "@assets/icons/left-arrow.png";
import CloseIcon from "@assets/icons/closeIcon.png";
import { useForm } from "antd/es/form/Form";
import { CommonInput } from "@components/common-components/input";
import { validateMessages } from "@utils/json-data";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import { notification } from "@utils/notifications";

const ProjectGCFForm = observer(() => {
  const [form] = useForm();
  const navigate = useNavigate();

  const onFormSubmit = (values) => {
    navigate(constRoute?.projectResultsGcfResults56);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.contextBaselineDiv}>
        <div>
          <p className={style.pTageOne}>
            Project Name: <strong>Brazil Climate Security</strong>
          </p>
          <p className={style.pTageTwo}>
            Percent Complete: <strong>48%</strong>
          </p>
        </div>
        <div>
          <p className={style.pTageThree}>
            Concept Note Section:
            <strong> B.3. Expected project results aligned with the GCF</strong>
          </p>
        </div>
      </div>

      <div className={style.barContentContainer}>
        <div className={style.layoutDiv}>
          <div className={style.siderStyle}>
            <div className={style.sideInnerDiv}>
              <div className={style.importantDiv}>
                <p className={style.pTagFour}>Quick Tips</p>
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
                  label="10a) Briefly Describe Country Ownership of the Project.*"
                  name={"firstField"}
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <CommonInput
                    inputType="textarea"
                    className={style.emailInput}
                  />
                </Form.Item>
                <Form.Item
                  label="10b) What is the AE’s experience working in the project country of implementation or a similar context."
                  name={"ae"}
                >
                  <CommonInput
                    inputType="textarea"
                    placeholder="Leave blank if you want Climate Finance Co-pilot to supply suggested narratives to give you a head start on completing this section."
                    className={style.emailInput}
                  />
                </Form.Item>
                <Form.Item
                  label="10c) What is the AE/EE experience in implementing similar projects/ intervention."
                  name={"ee"}
                >
                  <CommonInput
                    inputType="textarea"
                    placeholder="Leave blank if you want Climate Finance Co-pilot to supply suggested narratives to give you a head start on completing this section."
                    className={style.emailInput}
                  />
                </Form.Item>
              </Form>
            </div>
            <div className={style.footerButtonsDiv}>
              <Form form={form} onFinish={onFormSubmit}>
                <Button htmlType="submit" className={style.nextButton}>
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

export default memo(ProjectGCFForm);