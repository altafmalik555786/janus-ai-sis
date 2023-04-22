import { observer } from "mobx-react";
import style from "./style.module.scss";
import React, { memo } from "react";
import { Col, Divider, Form, Row } from "antd";
import CloseIcon from "@assets/icons/closeIcon.png";
import { useForm } from "antd/es/form/Form";
import { CommonInput } from "@components/common-components/input";
import { validateMessages } from "@utils/json-data";

const ContextAndBaselineForm = observer(() => {
  const [form] = useForm();

  const onFormSubmit = (values) => {
    console.log("values", values)
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.contextBaselineDiv}>
        <div>
          <p className={style.pTageOne}>
            Project Name: <strong>Brazil Climate Security</strong>
          </p>
          <p className={style.pTageTwo}>
            Percent Complete: <strong>0%</strong>
          </p>
        </div>
        <div>
          <p className={style.pTageThree}>
            Concept Note Section:<strong> B.1. Context And Baseline</strong>
          </p>
        </div>
      </div>
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
                  Provide information on which climate risks/impacts the
                  intervention is designed to address.
                </p>
                <p className={style.pTagSix}>
                  Describe the main root causes and barriers (social, gender,
                  fiscal, regulatory, technological, financial, ecological,
                  institutional, etc.) that need to be addressed. 
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
        <div className={style.contentContainer}>
          <h1>Please Fill In the Blanks Below:</h1>

          <div className={style.formBox}>
            <Form
              className={style.formData}
              form={form}
              autoComplete="false"
              onFinish={onFormSubmit}
              validateMessages={validateMessages}
              layout="vertical"
            >
              <h4>4. Describe the expected set of components/outputs and subcomponents/activities to address the previously discussed barriers identified that will lead to the expected outcomes.</h4>
              <Form.Item name={"projectName"} 
              >
                <CommonInput type="textarea" className={style.emailInput} />
              </Form.Item>
              <div className={style.nextButtonDiv}>
                <button className={style.nextButton}>Next</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default memo(ContextAndBaselineForm);
