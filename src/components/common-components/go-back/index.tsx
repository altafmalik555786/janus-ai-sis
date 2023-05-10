import { observer } from "mobx-react";
import { memo } from "react";
import style from "./style.module.scss";
import GoBackImg from "@assets/images/GoBack.svg";
import { useNavigate } from "react-router-dom";
import { notification } from "@utils/notifications";

interface Props {
  onClick?: any;
  className?: any;
  onClickForFooterGo? : any;
}
const GoBack: React.FC<Props> = observer(({ onClick,...props }) => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    // notification.success("Save and Quit");
    if(props?.onClickForFooterGo){
      props?.onClickForFooterGo();
    }else{
      navigate(`${onClick}`)
    }
  }
  return (
    <div className={style.mainWrraper}>
      <img
        onClick={goBackHandler}
        src={GoBackImg}
        alt="ws"
        className={props?.className ? props?.className : style.saveAndQuitImg}
      />
    </div>
  );
});

export default memo(GoBack);
