import { Button, Checkbox, Form, Input, Row } from "antd";
import { observer } from "mobx-react";
import React, { memo } from "react";
import style from "./style.module.scss";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import { validateMessages } from "@utils/json-data";
import { useStore } from "@stores/root-store";
import { notification } from "@utils/notifications";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const SignUp = observer(() => {
  const [signUpForm] = Form.useForm();
  const navigate = useNavigate();

  const {
    user: { onSignUpUser },
  } = useStore(null);

  const onFormSubmit = (values) => {
    const payload = {
      email: values.email,
      password: values.password,
      phone: values.telephone,
    }
    if(values.password === values.confirmPassword){
      onSignUpUser(payload)
    }else{
      notification.error("Password should be matched");
    }
  };

  const onChange = (e: CheckboxChangeEvent) => {
    // console.log(`checked = ${e.target.checked}`);
  }; 

  return (
    <div className={style.mainSignUpWrraper}>
      <div style={{ width: 500, margin: 10 }}>
        <div className={style.welcomeWrraper}>
          <img src={welcomeLogo} alt="" />
          <h2>Create Your Account</h2>
          <p>
            Once you create your account, you will have a 7-day free trial to
            use Climate Finance Copilot and we will notify you once the trial
            expires.{" "}
          </p>
        </div>
        <Form
          form={signUpForm}
          name={"basic"}
          onValuesChange={(e) => console.log(e)}
          onFinish={onFormSubmit}
          autoComplete={"off"}
          validateMessages={validateMessages}
          layout="vertical"
          className={style.signUpForm}
        >
          <Form.Item
            label={"Email Address"}
            name={"email"}
            rules={[
              {
                required: true,
                type:"email",
                message: `Please provide a valid email address`,
              },
            ]}
          >
            <Input placeholder="Enter email address" />
          </Form.Item>
          <Form.Item
            label={"Telephone Number"}
            name={"telephone"}
            rules={[
              {
                required: true,
                message: "invalid number",
              },
            ]}
          >
            <Input placeholder="Enter number" />
          </Form.Item>
          <Form.Item
            label={"Password"}
            name={"password"}
            rules={[
              {
                required: true,
                message: "Must be at least 8 characters",
              },
            ]}
          >
            <Input.Password
              placeholder="Enter Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          {/* <Form.Item
           label={""}
           name={"PasswordRule"}
          >
          <label>Must be at least 8 characters</label>
          </Form.Item> */}
          <Form.Item
            label={"Confirm Password"}
            name={"confirmPassword"}
            rules={[
              {
                required: true,
                message: "invalid password",
              },
            ]}
          >
            <Input.Password
              placeholder="Enter Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
        </Form>
        <div>
          <div className={style.signUpWrraper}>
          <Checkbox onChange={onChange}>I accept the <span className={style.termsStyle}>Terms</span> & <span className={style.termsStyle}>Privacy Policy</span></Checkbox>
            <Form form={signUpForm} onFinish={onFormSubmit}>
              <Button htmlType="submit" className={style.signUpBtn}>
                Sign Up
              </Button>
            </Form>
          </div>
          <div className={style.loginWrraper}>
            <p>Already have an account?</p>
            <span style={{cursor:'pointer'}} onClick={() => navigate(constRoute?.login)}> Log In</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default memo(SignUp);
