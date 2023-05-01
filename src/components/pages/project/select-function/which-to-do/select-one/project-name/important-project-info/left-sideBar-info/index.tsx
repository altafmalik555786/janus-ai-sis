import { observer } from "mobx-react";
import { memo } from "react";
import style from "./style.module.scss";
import CloseIcon from "@assets/icons/closeIcon.png";
import { Divider } from "antd";


interface Props {}
const LeftSideBarInfo: React.FC<Props> = observer(({ ...props }) => {
  return (
    <div className={style.mainWrraper}>
     <div className={style.layoutDiv}>
          <div className={style.siderStyle}>
            <div className={style.sideInnerDiv}>
              <div className={style.importantDiv}>
                <p className={style.pTagFour}>Important</p>
                <button
                  className={style.btnClass}
                //   onClick={() => setShow(!show)}
                >
                  <img
                    src={CloseIcon}
                    className={style.closeIconImg}
                    alt="fd"
                  />
                </button>
              </div>
            
                <div className={style.pTageGroup}>
                  <p className={style.pTagFive}>
                    Provide information on which climate risks/impacts the
                    intervention is designed to address.
                  </p>
                  <p className={style.pTagSix}>
                    Describe the main root causes and barriers (social, gender,
                    fiscal, regulatory, technological, financial, ecological,
                    institutional, etc.) that need to be addressed. 
                  </p>
                  <p className={style.pTagSeven}>
                    Be sure to include the number of beneficiaries the project
                    is expected to help.
                  </p>
                </div>
              
              <Divider />
            </div>
          </div>
        </div>
    </div>
  );
});

export default memo(LeftSideBarInfo);