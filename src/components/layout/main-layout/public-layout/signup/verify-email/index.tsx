import { observer } from "mobx-react";
import { memo } from "react";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import style from "./style.module.scss";
import { Button, Form, Input, Spin } from "antd";
import { useStore } from "@stores/root-store";
import { constRoute } from "@utils/route";
import { useNavigate } from "react-router-dom";
import { notification } from "@utils/notifications";
import { catchError } from "@utils/common-functions";

const VerifyEmail = observer(() => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const {
    user: { isLoadingSignup, onSignUpUser, verificationCode, loadUserInfo },
  } = useStore(null);

  const onFormSubmit = async (values) => {
    const signupData = JSON.parse(localStorage.getItem("signupPayload"));
    if (values.code === verificationCode) {
      const res = await onSignUpUser(signupData);
      localStorage.removeItem("signupPayload");
      if(res?.jwt_token){
        localStorage.setItem("token", res?.jwt_token);
        setTimeout(() => {
          loadUserInfo().then((data) => {
        if(data?.data?.error?.includes('Invalid token')|| data?.data?.error?.includes('Token has expired')){
          catchError(data, "loadUserInfo");  
          navigate(`${constRoute.login}`);
        } else{
          localStorage.setItem('trialModal', 'true')
          navigate(`${constRoute.home}`);
}
           
           });
        }, 1000);
      } else {
        navigate(constRoute?.signup);
      }
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
              {(isLoadingSignup && <Spin />) || "Continue"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
});

export default memo(VerifyEmail);
