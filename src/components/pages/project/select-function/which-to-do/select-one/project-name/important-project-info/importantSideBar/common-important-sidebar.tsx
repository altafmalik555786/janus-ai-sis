import React, {useState} from "react";
import style from "./style.module.scss";
import { Divider } from "antd";
import CloseIcon from "@assets/icons/closeIcon.png";


export interface ImportantSidebarProps {
    fristPara?: string;
    secondParagraph?: string;
    thirdParagraph?: string;
    forthParagraph?: string;
    isList?: boolean;
    listArray?: any;
    title?: string
}


const CommonImportantSideBar = ({
    fristPara,
    secondParagraph,
    thirdParagraph,
    forthParagraph,
    isList = false,
    listArray,
    title
}: ImportantSidebarProps) => {
    const [show, setShow] = useState(true);

  return (
  <>
   {isList ? 
    show && (
      <div className={style.layoutDiv}>
        <div className={style.siderStyle}>
          <div className={style.sideInnerDiv}>
            <div className={style.importantDiv}>
              <p className={style.pTagFour}>{title || ''}</p>
              <button className={style.btnClass} onClick={() => setShow(!show)}>
                <img
                  src={CloseIcon}
                  className={style.closeIconImg}
                  alt="fd"
                />
              </button>
            </div>
            <div className={style.pTageGroup}>
              <p className={style.pTagFive}> 
                {fristPara || ''}
              </p>
              <p className={style.pTagSix}>
                <ul>
                  {listArray?.map((item, index)=>{
                    return <li key = {index}>{item}</li>
                  })}
                </ul>
                 
              </p>
            </div>
            {/* <Divider /> */}
          </div>
        </div>
      </div>
    ):
    show && ( 
        <div className={style.layoutDiv}>
          <div className={style.siderStyle}>
            <div className={style.sideInnerDiv}>
              <div className={style.importantDiv}>
                <p className={style.pTagFour}>Quick Tips</p>
                <button className={style.btnClass} onClick={() => setShow(!show)}>
                  <img
                    src={CloseIcon}
                    className={style.closeIconImg}
                    alt="fd"
                  />
                </button>
              </div>
              <div className={style.pTageGroup}>
                <p className={style.pTagFive}>
                {fristPara  || ''}
                </p>
                <p className={style.pTagSix}>
                 {secondParagraph || ''}
                </p>
                <p className={style.pTagSeven}>
                {thirdParagraph|| ''}
                </p>

                <p className={style.pTagSeven}>
                  {forthParagraph || ''}
                </p>
              </div>
              {/* <Divider /> */}
            </div>
          </div>
        </div>
      )}
  </>
  );
};

export default CommonImportantSideBar;
