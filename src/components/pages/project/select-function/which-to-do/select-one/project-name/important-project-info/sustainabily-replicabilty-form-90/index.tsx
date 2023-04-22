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

const SustainabilityReplicabilityForm = observer(() => {
  const [form] = useForm();
  const navigate = useNavigate();

  const onFormSubmit = (values) => {
    navigate(constRoute?.sustainabilityReplicabilityResults100);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.contextBaselineDiv}>
        <div>
          <p className={style.pTageOne}>
            Project Name: <strong>Brazil Climate Security</strong>
          </p>
          <p className={style.pTageTwo}>
            Percent Complete: <strong>90%</strong>
          </p>
        </div>
        <div>
          <p className={style.pTageThree}>
            Concept Note Section:
            <strong>
              {" "}
              C.3. Sustainability and replicability of the project (exit
              strategy){" "}
            </strong>
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
                  label="13a) Please explain how the project/programme sustainability will be ensured in the long run and how this will be monitored, after the project/programme is implemented with support from the GCF and other sources.*"
                  name={"firstField"}
                  rules={[
                    {
                      required: true,
                      message: "This field is required"
                    },
                  ]}
                >
                  <CommonInput
                    inputType="textarea"
                    className={style.emailInput}
                  />
                </Form.Item>
                <Form.Item
                  label="13b) For non-grant instruments, explain how the capital invested will be repaid and over what duration of time."
                  name={"nonGrant"}
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
                    onClick={() => navigate(constRoute?.sustainabilityReplicabilityForm90)}
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
