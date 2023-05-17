import { observer } from "mobx-react";
import { memo } from "react";
import style from "./style.module.scss"
import SaveAndQuit from "@assets/images/Save-Quit.svg";
import { notification } from "@utils/notifications";
import { useNavigate } from "react-router-dom";
import { Button, Tooltip } from "antd";

interface Props {
  onClick?: any;
  onClickForFooter?: any;
}
const SaveQuit: React.FC<Props> = observer(({ onClick, ...props }) => {
  const navigate = useNavigate();
  const saveQuitHandler = () => {
    notification.success("Save and Quit");
    if(props?.onClickForFooter){
      props?.onClickForFooter();
    }else{
      navigate(`${onClick}`)
    }
  }
  const saveQuitTooltipData = () => {
    return <div style={{padding:11, color:"#000000"}}>
    <h2 style={{margin:0}}>Important!</h2>
    <p>This button takes you to the previous screen and the results currently displayed could have a different output if you re-submit. Make sure to copy your results.</p>
    <hr />
    <Button style={{backgroundColor:'#00B840', width:66, padding:' 6px 20px 10px 15px', height:34, color:"#FFFFFF"}}>Got it</Button>
  </div>
  }
  return (
    <div className={style.mainWrraper}>
        <Tooltip color="#FFFF" title={saveQuitTooltipData} ><img onClick={saveQuitHandler} src={SaveAndQuit} alt="ws" 
        className={style.saveAndQuitImg}   /></Tooltip>
    </div>
  );
});

export default memo(SaveQuit);
 