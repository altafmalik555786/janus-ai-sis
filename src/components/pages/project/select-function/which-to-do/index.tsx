import { observer } from "mobx-react";
import style from "./style.module.scss";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import LeftArrow from '@assets/icons/left-arrow.png'

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
                return (
                  <Col lg={8} md={12} xs={24}>
                    <div
                      onClick={item.navigate}
                      className={style.cardItem}
                    >
                      {(item?.status === "Most Popular" && (
                        <div className={style.statusBadge}>
                          {" "}
                          <p> {item?.status} </p>{" "}
                        </div>
                      )) || <p> {item?.status || " " }</p>}
                      <h4 className={ !(item?.status?.length) && style.withOutStatus } >{item?.title}</h4>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
        <div className={style.btnDiv}>
        <div className={style.twoBtnDiv}>
          <button className={style.goBtn}> <img src={LeftArrow} alt="left-arrow" /> Go Back</button>
          <button className={style.saveBtn}>Save & Quit</button>
        </div>
      </div>
      </Row>
    </div>
  );
});

export default WhichToDo;
