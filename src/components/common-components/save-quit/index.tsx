import { observer } from "mobx-react";
import { memo } from "react";
import style from "./style.module.scss"
import SaveAndQuit from "@assets/images/Save-Quit.svg";
import { notification } from "@utils/notifications";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";

interface Props {
  onClick?: any;
  onClickForFooter?: any;
  className?:any
}
const SaveQuit: React.FC<Props> = observer(({ onClick, ...props }) => {
  const navigate = useNavigate();
  const saveQuitHandler = () => {
    notification.success("Save and Quit");
    if(props?.onClickForFooter){
      props?.onClickForFooter();
    }else{
      navigate(constRoute?.home)
    }
  }

  return (
    <div className={style.mainWrraper}>
      <img onClick={saveQuitHandler} src={SaveAndQuit} alt="ws" 
        className={props?.className ? props?.className : style.saveAndQuitImg}   />
    </div>
  );
});

export default memo(SaveQuit);
 