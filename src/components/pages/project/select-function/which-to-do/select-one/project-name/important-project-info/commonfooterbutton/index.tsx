import React from "react";
import style from "./style.module.scss";
import { Button, Form } from "antd";
import LeftArrow from "@assets/icons/left-arrow.png";
import SaveQuit from "@components/common-components/save-quit";
import GoBack from "@components/common-components/go-back";
import { constImages } from "@utils/images";

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
}: CommonFooterButtonProps) => {
  return (
    <>
      {isResult ? (
        <div className={style.footerButtonsDiv}>
          <div className={style.leftBtnContainer}>
            <img  onClick={() => handleGoNext()} src={constImages.nextBtn} alt="" />
            {/* <Button onClick={() => handleGoNext()} className={style.nextButton}>
              Next
            </Button> */}
           {!isLoadingRegenrate ? <img  className={style.reGenerateImg} onClick={() => handleRegenrate()} src={constImages.RegenerateBtn} alt="" /> :
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
              <GoBack onClickForFooterGo={handlegoback} />
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
        <div className={style.footerButtonsDiv}>
          <Form form={form} onFinish={handleSubmit}>
            {isLoadingSubmit ? <Button
              loading={isLoadingSubmit}
              disabled={isLoadingSubmit}
              //  onClick={()=>handleSubmit()}
              htmlType="submit"
              className={style.nextButton}
            >
              Submit
            </Button>:
            <img className={style.nextImg} onClick={() => handleSubmit()} src={constImages.SubmitBtn} alt="" />}
          </Form>
          <div className={style.btnDiv}>
            <div className={style.twoBtnDiv}>
              {/* <button className={style.goBtn} onClick={() => handlegoback()}>
                <img src={LeftArrow} alt="left-arrow" /> Go Back
              </button> */}
              <GoBack onClickForFooterGo={handlegoback} />

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
