import React from "react";
import style from "./style.module.scss";
import { Button, Form, Tooltip } from "antd";
import LeftArrow from "@assets/icons/left-arrow.png";
import SaveQuit from "@components/common-components/save-quit";
import GoBack from "@components/common-components/go-back";
import { constImages } from "@utils/images";
import { useNavigate } from "react-router-dom";

export interface CommonFooterButtonProps {
  handleSubmit?: any;
  handlegoback?: any;
  handleSaveAndQuit?: any;
  handleGoNext?: any;
  handleRegenrate?: any;
  isResult?: boolean;
  isLoading?: boolean;
  isLoadingRegenrate?: boolean;
  isLoadingSubmit?: boolean;
  form?: any;
  handleQuickNext?: any;
  customStyle?:any;
}

const CommonFooterButton = ({
  handleSubmit,
  handlegoback,
  handleSaveAndQuit,
  handleRegenrate,
  handleGoNext,
  isResult = false,
  isLoading = false,
  isLoadingRegenrate,
  isLoadingSubmit,
  form,
  handleQuickNext,
  customStyle
}: CommonFooterButtonProps) => {
  const navigate = useNavigate();
  const tooltipData = () => {
    return <div style={{paddingLeft:11,paddingRight:11, color:"#000000"}}>
      <p style={{margin:0, fontFamily: 'Inter',fontStyle: 'normal', fontWeight: 500,fontSize: '20px',lineHeight: '30px',color: '#000000'}}>Important!</p>
      <p style={{marginTop:4, fontFamily: 'Inter', fontStyle: 'normal', fontSize:14}}>If you plan on “regenerating” this result, be aware that you will lose the current output results being displayed.</p>
      {/* <hr /> */}
      <div style={{marginTop:12, padding:'12px 20px', marginLeft:-19, marginRight:-19, marginBottom:-6, border: '1px solid #E0E0E0'}}><Button style={{backgroundColor:'#00B840', width:66, padding:' 6px 20px 10px 15px', height:34, color:"#FFFFFF"}}>Got it</Button></div>
    </div>
  }
  return (
    <>
      {isResult ? (
        <div style={customStyle && customStyle} className={style.footerButtonsDiv}>
          <div className={style.leftBtnContainer}>
            <img  onClick={() => handleGoNext()} src={constImages.nextBtn} alt="" />
            {/* <Button onClick={() => handleGoNext()} className={style.nextButton}>
              Next
            </Button> */}
           {!isLoadingRegenrate ?
            <Tooltip overlayInnerStyle={{width:294}} className={style.tooltipWrapper} color="#FFFF" title={tooltipData} ><img  className={style.reGenerateImg} onClick={() => handleRegenrate()} src={constImages.RegenerateBtn} alt="" /> </Tooltip>:
            <Button
              onClick={() => handleRegenrate()}
              className={style.reGenerate}
              loading={isLoadingRegenrate}
              disabled={isLoadingRegenrate}
            >
              Regenerate
            </Button>}
          </div>
          <div className={style.btnDiv}>
            <div className={style.twoBtnDiv}>
              {/* <button className={style.goBtn} onClick={() => handlegoback()}>
                <img src={LeftArrow} alt="left-arrow" /> Go Back
              </button> */}
              <GoBack isTooltip={true} onClickForFooterGo={handlegoback} />
              {/* <button
          onClick={() => {
            handleSaveAndQuit()
          }}
          className={style.saveBtn}
        >
          Save & Quit
        </button> */}
              <SaveQuit onClickForFooter={handleSaveAndQuit} />
            </div>
          </div>
        </div>
      ) : (
        <div style={customStyle && customStyle}className={style.footerButtonsDiv}>
          <Form form={form} onFinish={handleSubmit}>
            <Button
              loading={isLoadingSubmit}
              disabled={isLoadingSubmit}
              //  onClick={()=>handleSubmit()}
              htmlType="submit"
              className={style.nextButton}
            >
              Submit
            </Button>
            {/* <Button
              className={style.quickNextButton}
              onClick={() => navigate(handleQuickNext)}
            >
              Quick next
            </Button> */}
          </Form>
          <div className={style.btnDiv}>
            <div className={style.twoBtnDiv}>
              {/* <button className={style.goBtn} onClick={() => handlegoback()}>
                <img src={LeftArrow} alt="left-arrow" /> Go Back
              </button> */}
              <GoBack isTooltip={true} onClickForFooterGo={handlegoback} />

              {/* <button
                onClick={() => {
                  handleSaveAndQuit();
                }}
                className={style.saveBtn}
              >
                Save & Quit
              </button> */}

              <SaveQuit onClickForFooter={handleSaveAndQuit} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommonFooterButton;
