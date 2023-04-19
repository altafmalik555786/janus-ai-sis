import { observer } from "mobx-react";
import { memo } from "react";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import { useStore } from "@stores/root-store";

const CheckEmail = observer(() => {
  const navigate = useNavigate();
  const {
    user: { onSendResendEmail },
  } = useStore(null);

  const onResend = async () => {
    const payload = {
      email: localStorage.getItem("resendEmail"),
      link: "http://localhost:3000/#/set-new-password",
    }
    onSendResendEmail(payload)
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <div className={style.headingWrapper}>
          <img src={welcomeLogo} alt="janus-logo" className={style.janusLogo} />
          <h2 className={style.checkEmail}>Check Your Email</h2>
          <p className={style.paraText}>
          Your new password must be different to previously used passwords.
          </p>
        </div>
        <div className={style.outerLink}>
          <p>Didn’t receive the email link? Click to resend</p>
          <span onClick={onResend} className={style.aLink}>
            Click to resend
          </span>
        </div>
        <div className={style.outerLink}>
          <p>Back to</p>
          <span onClick={() => navigate(constRoute.login)} className={style.aLink}>
            Login
          </span>
        </div>
      </div>
    </div>
  );
});

export default memo(CheckEmail);
