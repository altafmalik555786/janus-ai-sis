import { observer } from "mobx-react";
import { memo } from "react";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import style from "./style.module.scss";
import { Button, Form, Spin } from "antd";
import { CommonInput } from "@components/common-components/input";
import { useStore } from "@stores/root-store";
import { constRoute } from "@utils/route";
import { useNavigate } from "react-router-dom";

const ForgotPassword = observer(() => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const {
    user: { onSendResendEmail, isLoadingResendEmail },
  } = useStore(null);

  const onFormSubmit = (values) => {
    onSendResendEmail(values);
    navigate(constRoute?.checkEmail)
  };

  const validateMessages = {
    required: "email is required!",
    types: {
      email: "email is not a valid email!",
    },
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <div className={style.headingWrapper}>
          <img src={welcomeLogo} alt="janus-logo" className={style.janusLogo} />
          <h2 className={style.forgotPassword}>Forgot Password?</h2>
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
            name={"email"}
            label="Email Address"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please Enter a valid Email",
              },
            ]}
          >
            <CommonInput type="email" className={style.emailInput} />
          </Form.Item>
          <div className={style.loginWrraper}>
            <Button className={style.resendClickBtn} htmlType="submit">
              {(isLoadingResendEmail && <Spin />) || "Click me"}{" "}
            </Button>
          </div>
        </Form>
        <div className={style.outerLink}>
          <p>Back to</p>{" "}
          <a href="#" className={style.aLink}>
            Login
          </a>
        </div>
      </div>
    </div>
  );
});

export default memo(ForgotPassword);
