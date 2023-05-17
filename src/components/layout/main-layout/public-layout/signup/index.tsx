import { Button, Checkbox, Form, Input, Select, Spin } from "antd";
import { observer } from "mobx-react";
import { memo, useEffect, useState } from "react";
import style from "./style.module.scss";
import Eye from "@assets/icons/Eye.png";
import EyeOff from "@assets/icons/EyeOff.png";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import { validateMessages } from "@utils/json-data";
import { useStore } from "@stores/root-store";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

const SignUp = observer(() => {
  const [signUpForm] = Form.useForm();
  const navigate = useNavigate();
  const [isOtherType, setisOtherType] = useState(false);
  const [isAccept, setIsAccept] = useState(true);
  const {
    user: { isLoadingEmailVerification, onSendEmailVerification },
  } = useStore(null);

  useEffect(() => {
    signUpForm.setFieldValue("orgtype", "NGO");
  }, []);

  const onFormSubmit = async (values) => {
    const payload = {
      firstname: values?.firstname,
      lastname: values?.lastname,
      orgtype: values?.orgtype,
      orgname: values?.orgname,
      role: values?.role,
      country: values?.country,
      email: values?.email,
      phone: values?.phone,
      password: values?.password,
      plan: "bronze",
    };
    if (isOtherType) {
      payload["orgtype"] = values?.orgTypeName;
    }
    localStorage.setItem("signupPayload", JSON.stringify(payload));
    const res = await onSendEmailVerification({
      email: values.email,
      lastname: values.lastname,
    });
    res?.verification_code && navigate(constRoute?.verifyEmail);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    setIsAccept(e.target.checked);
  };

  return (
    <div className={style.mainSignUpWrraper}>
      <div style={{ width: 500, margin: 20 }}>
        <div className={style.welcomeWrraper}>
          <img src={welcomeLogo} alt="" />
          <h2>Create Your Account</h2>
          <p>
          Once you create your account, you will have unlimited and free access to the Basic Plan. Feel free to upgrade to premium at anytime, once the trial expires.
          </p>
        </div>
        <Form
          form={signUpForm}
          name={"basic"}
          onFinish={onFormSubmit}
          autoComplete={"off"}
          validateMessages={validateMessages}
          layout="vertical"
          className={style.signUpForm} 
        >
          
          <Form.Item label={"First Name"} name={"firstname"}>
            <Input placeholder="Enter your first name" />
          </Form.Item>
          <Form.Item
            label={"Last Name"}
            name={"lastname"}
            rules={[
              {
                required: true,
                message: "Last name is required",
              },
            ]}
          >
            <Input placeholder="Enter your last name" />
          </Form.Item>
          <Form.Item label={"Organization Type"} name={"orgtype"}>
            <Select
              defaultValue="NGO"
              onChange={(e) => {
                if (e === "Other") {
                  setisOtherType(true);
                } else {
                  setisOtherType(false);
                }
              }}
              options={[
                { value: "NGO", label: "NGO" },
                { value: "Government", label: "Government" },
                { value: "Foundation", label: "Foundation" },
                { value: "Bank", label: "Bank" },
                { value: "Other", label: "Other" },
              ]}
            />
          </Form.Item>
          {isOtherType && (
            <Form.Item label={"Add Organization Type"} name={"orgTypeName"}>
              <Input placeholder="Enter your organization type" />
            </Form.Item>
          )}
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
          <Form.Item label={"Telephone Number"} name={"phone"}>
            <Input placeholder="Enter number" />
          </Form.Item>
          <Form.Item label={"Password"} name={"password"}>
            <Input.Password
              placeholder="Enter Password"
              iconRender={(visible) =>
                visible ? (
                  <img height={18} width={18} src={Eye} alt="" />
                ) : (
                  <img height={18} width={18} src={EyeOff} alt="" />
                )
              }
            />
          </Form.Item> 
      
        </Form>
        <div>
          <div className={style.signUpWrraper}>
           <div className={style.checkBox}>
            <Checkbox defaultChecked={true} onChange={onChange}/>
            <p style={{fontSize:"20px"}}>
              I accept the <span className={style.termsStyle}>Terms</span> &
              <span className={style.termsStyle}>Privacy Policy</span>
              </p>
              </div>
            <Form form={signUpForm} onFinish={onFormSubmit}>
              <Button
                htmlType="submit"
                disabled={!isAccept}
                className={style.signUpBtn}
              >
                {(isLoadingEmailVerification && <Spin />) || "Sign Up"}
              </Button>
            </Form>
          </div>
          <div className={style.loginWrraper}>
            <p>Already have an account?</p>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate(constRoute?.login)}
            >
              Log In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
 
export default memo(SignUp);
