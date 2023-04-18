import { observer } from "mobx-react";
import { memo, useCallback, useMemo } from "react";
import style from "./style.module.scss";
import CustomButton from "@components/common-components/custom-button";
import {
  CAMEL_ON_BLUR,
  INITIAL_VALUES,
  LOWER_BASIC,
  LOWER_EMAIL,
  LOWER_IS_REQUIRED,
  LOWER_OFF,
  CAP_USER_NAME,
  LOWER_TEXT,
  CAP_PASSWORD,
  LOWER_PASSWORD,
  LOWER_SUBMIT,
  CAP_LOGIN,
  LOWER_DARK,
} from "@utils/const";
import { Form } from "antd";
import { CommonInput } from "@components/common-components/input";
import DarkUserLogo from "@assets/icons/dark-user-logo.png";
import DarkLock from "@assets/icons/dark-lock.png";
import { useStore } from "@stores/root-store";
import { useNavigate } from "react-router-dom";
import { validateMessages } from "@utils/json-data";
import { useTheme } from "@utils/hooks/useTheme";

const Login = observer(() => {
  const theme = useTheme();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const {
    user: { onUserLoginInfo, isLoadingLogin },
  } = useStore(null);

  const onLogin = useCallback((values) => {
    const data = {
      password: values?.password,
      userName: values?.email,
    };
    onUserLoginInfo(data, navigate);
  }, []);

  const LoginForm = useMemo(
    () => (
      <Form
        form={form}
        name={LOWER_BASIC}
        initialValues={INITIAL_VALUES}
        onFinish={onLogin}
        autoComplete={LOWER_OFF}
        validateMessages={validateMessages}
        className={style.loginPanelForm}
      >
        <Form.Item
          name={LOWER_EMAIL}
          className={style.emailFormItem}
          validateTrigger={[CAMEL_ON_BLUR]}
          rules={[
            {
              required: true,
              message: CAP_USER_NAME + " " + LOWER_IS_REQUIRED,
            },
          ]}
        >
          <CommonInput
            placeholder={CAP_USER_NAME}
            inputType={LOWER_TEXT}
            className={style.loginInputFields}
            variant={LOWER_DARK}
            prefix={<img src={DarkUserLogo} alt="" />}
            onFocus={() => form.setFields([{ name: LOWER_EMAIL, errors: [] }])}
          />
        </Form.Item>
        <Form.Item
          className={style.passwordFormItem}
          name={LOWER_PASSWORD}
          rules={[
            {
              required: true,
              message: CAP_PASSWORD + " " + LOWER_IS_REQUIRED,
            },
          ]}
        >
          <CommonInput
            inputType={LOWER_PASSWORD}
            variant={LOWER_DARK}
            className={style.loginInputFields}
            prefix={<img src={DarkLock} alt="" />}
            placeholder={CAP_PASSWORD}
            onInput={(e) => {
              e.target.value = e.target.value.trim();
            }}
          />
        </Form.Item>
        <Form.Item>
          <CustomButton
            className={style.loginBtn}
            htmlType={LOWER_SUBMIT}
            loading={isLoadingLogin}
            title={CAP_LOGIN}
          />
        </Form.Item>
      </Form>
    ),
    []
  );

  return (
    <div className={theme}>
      <div className={style.loginPageContainer}>
       <h1>Login</h1>
      </div>
    </div>
  );
});

export default memo(Login);
