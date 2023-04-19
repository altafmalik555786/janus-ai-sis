import { observer } from "mobx-react";
import { memo } from "react";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import style from "./style.module.scss";
import { Button, Form, Input, Spin } from "antd";
import { useStore } from "@stores/root-store";
import { constRoute } from "@utils/route";
import { useNavigate } from "react-router-dom";
import { toJS } from "mobx";

const VerifyEmail = observer(() => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const {
    user: { isLoadingResendEmail, onSignUpUser, verificationCode },
  } = useStore(null);

  console.log("verificationCode", toJS(verificationCode))
  const onFormSubmit = (values) => {
    const signupData = JSON.parse(localStorage.getItem('signupPayload'))
    console.log("signupData", signupData)
      if( values.code === verificationCode){
        alert("succs")
        onSignUpUser(signupData)
        localStorage.removeItem('signupPayload')
        navigate(constRoute?.login);
      }
  };

  const validateMessages = {
    required: "Code is required!",
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <div className={style.headingWrapper}>
          <img src={welcomeLogo} alt="janus-logo" className={style.janusLogo} />
          <h2 className={style.forgotPassword}>Verification</h2>
          <p className={style.janusText}>
            Don’t sweat it, we will email you reset instructions to set a new
            password.
          </p>
        </div>
        <Form
          className={style.formData}
          form={form}
          onValuesChange={(e) => console.log(e)}
          autoComplete="false"
          onFinish={onFormSubmit}
          validateMessages={validateMessages}
          layout="vertical"
        >
          <Form.Item
            name={"code"}
            label="Please enter code"
            rules={[
              {
                required: true,
                message: "Please Enter a valid code",
              },
            ]}
          >
            <Input type="number" className={style.emailInput} />
          </Form.Item>
          <div className={style.loginWrraper}>
            <Button className={style.resendClickBtn} htmlType="submit">
              {(isLoadingResendEmail && <Spin />) || "Continue"}{" "}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
});

export default memo(VerifyEmail);