import { Button, Form, Input, Row } from "antd";
import { observer } from "mobx-react";
import React, { memo } from "react";
import style from "./style.module.scss";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import { validateMessages } from "@utils/json-data";

const Login = observer(() => {
  const [loginForm] = Form.useForm();

  return (
    <div className={style.mainLoginWrraper}>
      <div style={{ width: 500 }}>
        <div className={style.welcomeWrraper}>
          <img src={welcomeLogo} alt="" />
          <h2>Welcome Back</h2>
        </div>
        <Form
          form={loginForm}
          name={"basic"}
          onValuesChange={(e) => console.log(e)}
          // onFinish={onDepositeFormSubmit}
          // labelCol={{ xxl: 10, lg: 10, md: 10, xs: 10 }}
          // wrapperCol={{ xxl: 14, lg: 14, md: 12, xs: 12 }}
          autoComplete={"off"}
          validateMessages={validateMessages}
          // className={style.depositeCashForm}
        >
          <Form.Item
            label={"Email Address"}
            name={"Email"}
            rules={[
              {
                required: true,
                message: `Email Address is required`,
              },
            ]}
          >
            <Input placeholder="Enter email address" />
          </Form.Item>
          <Form.Item
            label={"Password"}
            name={"Password"}
            rules={[
              {
                required: true,
                message: "Password is required",
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
          <div className={style.loginWrraper}>
            <p>Forgot Password?</p>
            <Button className={style.loginBtn}>Log In</Button>
          </div>
          <div className={style.signupWrraper}>
            <p>Don’t have an account?</p>
            <span>Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default memo(Login);
