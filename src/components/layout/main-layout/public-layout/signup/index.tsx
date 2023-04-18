import { Button, Form, Input, Row } from "antd";
import { observer } from "mobx-react";
import React, { memo } from "react";
import style from "./style.module.scss";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import { validateMessages } from "@utils/json-data";

const SignUp = observer(() => {
  const [signUpForm] = Form.useForm();

  const onFormSubmit= (values) =>    {
console.log(values)
  }

  return (
    <div className={style.mainSignUpWrraper}>
      <div style={{ width: 500, margin:10}}>
        <div className={style.welcomeWrraper}>
          <img src={welcomeLogo} alt="" />
          <h2>Create Your Account</h2>
          <p>Once you create your account, you will have a 7-day free trial to use Climate Finance Copilot and we will notify you once the trial expires. </p>
        </div>
        <Form
          form={signUpForm}
          name={"basic"}
          onValuesChange={(e) => console.log(e)}
          onFinish={onFormSubmit}
          autoComplete={"off"}
          validateMessages={validateMessages}
          layout='vertical'
          className={style.signUpForm}
        >
          <Form.Item
            label={"Email Address"}
            name={"email"}
            rules={[
              {
                required: true,
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
            {/* <p>Forgot Password?</p> */}
            <Form form={signUpForm} onFinish={onFormSubmit}>
            <Button htmlType="submit" className={style.signUpBtn}>Sign Up</Button>
            </Form>
          </div>
          <div className={style.loginWrraper}>
            <p>Already have an account?</p>
            <span> Log In</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default memo(SignUp);
