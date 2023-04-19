import { observer } from "mobx-react";
import { memo } from "react";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import style from "./style.module.scss";
import { Button, Form, Input, Spin } from "antd";
import { useStore } from "@stores/root-store";
import { constRoute } from "@utils/route";
import { useNavigate } from "react-router-dom";
import Eye from "@assets/icons/Eye.png";
import EyeOff from "@assets/icons/EyeOff.png";
import { notification } from "@utils/notifications";

const SetNewPassword = observer(() => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const {
    user: { onResetPassword, isLoadingResetPassword },
  } = useStore(null);

  const onFormSubmit = async (values) => {
    const payload = {
      email: localStorage.getItem("resendEmail"),
      password: values?.password,
    }
    if (values.password === values.confirmPassword) {
      const res = await onResetPassword(payload);
      if (res?.jwt_token?.length > 0) {
        localStorage.removeItem("resendEmail")
        localStorage.setItem("token", res?.jwt_token)
        navigate(constRoute?.resetPasswordSuccessfully);
      }
    } else {
      notification.error("Password should be matched");
    }
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
            Your new password must be different to previously used passwords.{" "}
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
            label={"Enter Password"}
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
          <div className={style.loginWrraper}>
            <Button className={style.resendClickBtn} htmlType="submit">
              {(isLoadingResetPassword && <Spin />) || "Reset Password"}{" "}
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

export default memo(SetNewPassword);
