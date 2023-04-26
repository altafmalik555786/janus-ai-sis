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
import CommonHeaderPercentCycle from "../common-header-percent-cycle";

const gcfJustificationForm = observer(() => {
  const [form] = useForm();
  const navigate = useNavigate();

  const onFormSubmit = (values) => {
    navigate(constRoute?.gcfJustificationResults90);
  };

  return (
    <div className={style.mainContainer}>
     <CommonHeaderPercentCycle projectName={"Brazil Climate Security"} percent={'72%'} conceptNoteSection={'C.2 Justification of GCF Funding Request'}/> 
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
                  label="12a) Explain why the project requires GCF funding, i.e. explaining why this is not financed by the public and/ or private sector(s) of the country.*"
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
                  label="12b) Describe alternative funding options for the same activities being proposed."
                  name={"secondField"}
                >
                  <CommonInput
                    inputType="textarea"
                    placeholder="Leave blank if you want Climate Finance Co-pilot to supply suggested narratives to give you a head start on completing this section."
                    className={style.emailInput}
                  />
                </Form.Item>
                <Form.Item
                  label="12c) Justify the rationale and level of concessionality of the GCF financial instrument(s) as well as how this will be passed on to the end-users and beneficiaries."
                  name={"lastField"}
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
                    onClick={() => navigate(constRoute?.ndaAeResults72)}
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

export default memo(gcfJustificationForm);
