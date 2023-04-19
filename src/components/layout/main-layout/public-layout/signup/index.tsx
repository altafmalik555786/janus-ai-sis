import { Button, Checkbox, Form, Input, Row, Select, Spin } from "antd";
import { observer } from "mobx-react";
import React, { memo } from "react";
import style from "./style.module.scss";
import Eye from "@assets/icons/Eye.png";
import EyeOff from "@assets/icons/EyeOff.png";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import { validateMessages } from "@utils/json-data";
import { useStore } from "@stores/root-store";
import { notification } from "@utils/notifications";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

const SignUp = observer(() => {
  const [signUpForm] = Form.useForm();
  const navigate = useNavigate();

  const {
    user: { onSignUpUser, isLoadingSignup },
  } = useStore(null);

  const onFormSubmit = (values) => {
    if (values.password === values.confirmPassword) {
      onSignUpUser(values);
      navigate(constRoute?.verifyEmail)
    } else {
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
          onFinish={onFormSubmit}
          autoComplete={"off"}
          validateMessages={validateMessages}
          layout="vertical"
          onValuesChange={(e) => console.log(e)}
          className={style.signUpForm}
        >
          <Form.Item label={"First Name"} name={"firstname"}>
            <Input placeholder="Enter your first name" />
          </Form.Item>
          <Form.Item label={"Last Name"} name={"lastname"}>
            <Input placeholder="Enter your last name" />
          </Form.Item>
          <Form.Item label={"Organization Type"} name={"orgtype"}>
            <Select
              onChange={() => {}}
              options={[
                { value: "NGO", label: "NGO" },
                { value: "Gouvernment", label: "Gouvernment" },
                { value: "Foundation", label: "Foundation" },
                { value: "Bank", label: "Bank" },
                { value: "Other", label: "Other" },
              ]}
            />
          </Form.Item>

          <Form.Item label={"Organization Name"} name={"orgname"}>
            <Input placeholder="Enter your organization name" />
          </Form.Item>
          <Form.Item label={"Role"} name={"role"}>
            <Input placeholder="Enter your role" />
          </Form.Item>
          <Form.Item label={"Country"} name={"country"}>
            <Input placeholder="Enter your country" />
          </Form.Item>
          <Form.Item
            label={"Email Address"}
            name={"email"}
            rules={[
              {
                required: true,
                type: "email",
                message: `Please provide a valid email address`,
              },
            ]}
          >
            <Input placeholder="Enter email address" />
          </Form.Item>
          <Form.Item
            label={"Telephone Number"}
            name={"phone"}
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
                visible ? <img height={18}  width={18} src={Eye} alt='' /> : <img height={18}  width={18} src={EyeOff} alt='' />
              }
            />
          </Form.Item>
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
                visible ? <img height={18}  width={18} src={Eye} alt='' /> : <img height={18}  width={18} src={EyeOff} alt='' />
              }
            />
          </Form.Item>
        </Form>
        <div>
          <div className={style.signUpWrraper}>
            <Checkbox onChange={onChange}>
              I accept the <span className={style.termsStyle}>Terms</span> &{" "}
              <span className={style.termsStyle}>Privacy Policy</span>
            </Checkbox>
            <Form form={signUpForm} onFinish={onFormSubmit}>
              <Button htmlType="submit" className={style.signUpBtn}>
                { isLoadingSignup && <Spin /> || "Sign Up"  }
                
              </Button>
            </Form>
          </div>
          <div className={style.loginWrraper}>
            <p>Already have an account?</p>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate(constRoute?.login)}
            >
              {" "}
              Log In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default memo(SignUp);
