import { observer } from "mobx-react";
import React, { memo } from "react";
import JanusLogo from "@assets/images/janus-logo.png";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import style from "./style.module.scss";
import { Button, Form } from "antd";
import { CommonInput } from "@components/common-components/input";

const ForgotPassword = observer(() => {
  const [form] = Form.useForm();

  const onFormSubmit = (e) => {
    console.log(e);
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
        <div className={style.welcomeWrraper}>
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
        >
          <Form.Item
            name={"email"}
            rules={[
              {
                required: true,

                message: "Please Enter a valid Email",
              },
            ]}
          >
            <label className={style.loginLable}> Email Address</label>
            <CommonInput type="email" className={style.emailInput} />
            <Button htmlType="submit" className={style.submitBtn}>
              Click me
            </Button>
          </Form.Item>
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
