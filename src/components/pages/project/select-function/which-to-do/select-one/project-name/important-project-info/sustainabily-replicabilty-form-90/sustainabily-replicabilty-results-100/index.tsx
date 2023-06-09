import { observer } from "mobx-react";
import style from "./style.module.scss";
import React, { memo, useEffect, useState } from "react";
import { Button, Col, Divider, Form, Row } from "antd";
import LeftArrow from "@assets/icons/left-arrow.png";
import { useLocation, useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import { notification } from "@utils/notifications";
import CommonHeaderPercentCycle from "../../common-header-percent-cycle";
import { useStore } from "@stores/root-store";
import CommonFooterButton from "../../commonfooterbutton";
const SustainabilityReplicabilityResult = observer(() => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [generateResult, setRegenrateResult] = useState("");
  const {
    user: {
      getconceptNotedataList,
      conceptNote,
      setConceptNoteLoading,
      getLoadingConceptNote,
    },
  } = useStore(null);
  const [responseData] = useState(generateResult || state?.response);
  const handleNext = () => {
    setConceptNoteLoading(false);
    navigate(constRoute?.gcfCongratulation);
  };
  const handleRegenratePayload = async () => {
    const payload = localStorage.getItem("conceptPayload");
    const res = await conceptNote(JSON.parse(payload), navigate);
    setRegenrateResult(res?.response);
    const getReultsfromls = JSON.parse(localStorage.getItem("allResults"));
    const addResults =
      getReultsfromls &&
      getReultsfromls?.map((item) => {
        return {
          ...item,
          result11: res?.response,
        };
      });
    localStorage.setItem("allResults", JSON.stringify(addResults));
  };
  useEffect(() => {
    if (localStorage.getItem("allResults") === null) {
      localStorage.setItem(
        "allResults",
        JSON.stringify([{ result11: state?.response || "" }])
      );
    }
  }, []);

  const handleGoBack = () => {
    setConceptNoteLoading(false);
    navigate(constRoute?.sustainabilityReplicabilityForm90);
  };
  const handleSaveAndQuit = () => {
    setConceptNoteLoading(false);
    // notification.success("Save and Quit");
    navigate(constRoute?.home);
  };
  const results = JSON.parse(localStorage.getItem("allResults"));
  return (
    <div>
    <div className={style.mainContainer}>
      <CommonHeaderPercentCycle
        conceptNoteSection="C.3 Sustainability and Replicability of the Project 
(exit strategy)"
        percent="100%"
      />
      <div className={style.barContentContainer}>
        <div className={style.contentContainer}>
          <div className={style.innerContentContainer}>
            <h1>Your Results</h1>

            <div className={style.dataContentBox}>
              <div
                className={style.htmlContent}
                dangerouslySetInnerHTML={{
                  __html: responseData || results ? results[0]?.result11 : "",
                }}
              />
            </div>
            <div className={style.wordCountWrraper}>
              <p>
                Word Count:{" "}
                {responseData ? responseData?.split(" ")?.length : "0"}/1000
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    <CommonFooterButton
              handleGoNext={handleNext}
              handleRegenrate={handleRegenratePayload}
              handlegoback={handleGoBack}
              handleSaveAndQuit={handleSaveAndQuit}
              isResult={true}
              isLoadingRegenrate={getLoadingConceptNote}
            />
    </div>
  );
});

export default memo(SustainabilityReplicabilityResult);
