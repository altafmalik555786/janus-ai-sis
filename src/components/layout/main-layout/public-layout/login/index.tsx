import { Button, Form, Input, Row } from "antd";
import { observer } from "mobx-react";
import React, { memo } from "react";
import style from "./style.module.scss";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import { validateMessages } from "@utils/json-data";
import { useStore } from "@stores/root-store";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";

const Login = observer(() => {
  const [loginForm] = Form.useForm();
  const navigate = useNavigate()

  const { user: { onUserLogin } } = useStore(null)

  const onLogin = (value) => {
    console.log("value", value)
    onUserLogin(value, navigate)
  }

  return (
    <div className={style.mainLoginWrraper}>
      <div style={{ width: 500, margin: 10 }}>
        <div className={style.welcomeWrraper}>
          <img src={welcomeLogo} alt="welcom logo" />
          <h2>Welcome Back</h2>
        </div>
        <Form
          form={loginForm}
          name={"basic"}
          onValuesChange={(e) => console.log(e)}
          onFinish={onLogin}
          autoComplete={"off"}
          validateMessages={validateMessages}
          className={style.loginForm}
          layout="vertical"
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
            label={"Password"}
            name={"password"}
            rules={[
              {
                required: true,
                message: "Invalid password",
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
        <div>
          <div className={style.loginWrraper}>
            <p  onClick={() => {}} >Forgot Password?</p>
            <Button className={style.loginBtn} htmlType="submit" >Log In</Button>
          </div>
          <div className={style.signupWrraper}>
            <p>Don’t have an account?</p>
            <span onClick={() => navigate(constRoute?.signup)}>Sign up</span>
          </div>
        </div>
        </Form>

      </div>
    </div>
  );
});

export default memo(Login);
