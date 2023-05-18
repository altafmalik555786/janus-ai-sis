import { observer } from "mobx-react";
import style from "./style.module.scss";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import LeftArrow from "@assets/icons/left-arrow.png";
import CardItemsFunc from "../../common-components/card-item-func";
import { notification } from "@utils/notifications";
import GoBack from "@components/common-components/go-back";

const WhichToDo = observer(() => {
  const navigate = useNavigate();

  const btnCardsList = [
    {
      title: "Draft a GCF Proposal",
      status: "Coming Soon",
      disable:true
    },
    {
      title: "Draft a GCF Concept Note",
      status: "",
      navigate: () => navigate(constRoute?.selectOne),
    },
  ];
 
  return (
    <div>
    <div className={style.homePagePageContainer}>
      <Row>
        <div className={style.homePageContainerCol}>
          <div className={style.homePageContainer}>
            <h1>Which Do You Want To Do?</h1>
            <Row justify="center" className={style.boxesContiner} gutter={20}>
              {btnCardsList?.map((item) => {
                return <CardItemsFunc item={item} />;
              })}
            </Row>
          </div>
        </div>
        
      </Row>
    </div>
    <div className={style.btnDiv}>
    <div className={style.twoBtnDiv}>
    <div className={style.goBackBtnDiv}>
    <GoBack onClick={constRoute?.selectFunction} className={style.goBtn}/>
    </div>
      {/* <button className={style.goBtn}  onClick={() =>
        navigate(constRoute?.selectFunction)
      }
>
      
        <img src={LeftArrow} alt="left-arrow" /> Go Back
      </button> */}
      {/* <button
              onClick={() => {
                notification.success("Save and Quit");
                navigate(constRoute?.home);
              }}
              className={style.saveBtn}
            >
              Save & Quit
            </button> */}
    </div>
  </div>
  </div>
  );
});

export default WhichToDo;
