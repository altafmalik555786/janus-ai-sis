import { observer } from "mobx-react";
import style from "./style.module.scss";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import LeftArrow from "@assets/icons/left-arrow.png";
import CardItemsFunc from "../../common-components/card-item-func";

const WhichToDo = observer(() => {
  const navigate = useNavigate();

  const btnCardsList = [
    {
      title: "Draft a GCF Proposal",
      status: "Coming Soon",
    },
    {
      title: "Draft a GCF Concept Note",
      status: "",
      navigate: () => navigate(constRoute?.selectOne),
    },
  ];

  return (
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
        <div className={style.btnDiv}>
          <div className={style.twoBtnDiv}>
            <button className={style.goBtn}>
              {" "}
              <img src={LeftArrow} alt="left-arrow" /> Go Back
            </button>
            <button className={style.saveBtn}>Save & Quit</button>
          </div>
        </div>
      </Row>
    </div>
  );
});

export default WhichToDo;
