import { observer } from "mobx-react";
import { memo } from "react";
import style from "./style.module.scss";
import GoBackImg from "@assets/images/GoBack.svg";
import { useNavigate } from "react-router-dom";
import { notification } from "@utils/notifications";
import { Button, Tooltip } from "antd";

interface Props {
  onClick?: any;
  className?: any;
  onClickForFooterGo? : any;
  isTooltip?:any;
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
  const saveQuitTooltipData = () => {
    return  <div style={{paddingLeft:11,paddingRight:11, color:"#000000"}}>
    <p style={{margin:0, fontFamily: 'Inter',fontStyle: 'normal', fontWeight: 500,fontSize: '20px',lineHeight: '30px',color: '#000000'}}>Important!</p>
    <p style={{marginTop:4, fontFamily: 'Inter', fontStyle: 'normal', fontSize:14}}>This button takes you to the previous screen and the results currently displayed could have a different output if you re-submit. Make sure to copy your results.</p>
    <div style={{marginTop:12, padding:'12px 20px', marginLeft:-19, marginRight:-19, marginBottom:-6, border: '1px solid #E0E0E0'}}><Button style={{backgroundColor:'#00B840', width:66, padding:' 6px 20px 10px 15px', height:34, color:"#FFFFFF"}}>Got it</Button></div>
  </div>
  }
  return (
    <div className={style.mainWrraper}>
       {props?.isTooltip ? <Tooltip overlayInnerStyle={{minWidth:294}} color="#FFFF" title={saveQuitTooltipData} ><img
        onClick={goBackHandler}
        src={GoBackImg}
        alt="ws"
        className={props?.className ? props?.className : style.saveAndQuitImg}
      /></Tooltip> : 
      <img
        onClick={goBackHandler}
        src={GoBackImg}
        alt="ws"
        className={props?.className ? props?.className : style.saveAndQuitImg}
      />
      }
    </div>
  );
});

export default memo(GoBack);
