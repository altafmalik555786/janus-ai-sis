import { observer } from "mobx-react";
import style from "./style.module.scss";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";

const SelectFunction = observer(() => {
  const navigate = useNavigate();

  const btnCardsList = [
    {
      title: "Draft a GCF Concept Note Or Proposal",
      status: "",
    },
    {
      title: "Climate Rationale Advisor",
      status: "Coming Soon",
    },
    {
      title: "Grade a GCF Concept Note or Proposal",
      status: "Most Popular",
    },
    {
      title: "Create Project Structure Plan",
      status: "Coming Soon",
    },
    {
      title: "Funder Matchmaker ",
      status: "Coming Soon",
    },
    {
      title: "Draft An Annex",
      status: "Coming Soon",
    },
  ];

  return (
    <div className={style.homePagePageContainer}>
      <Row>
        <div className={style.homePageContainerCol}>
          <div className={style.homePageContainer}>
            <h1>Select a Function Below</h1>
            <Row className={style.boxesContiner} gutter={10}>
              {btnCardsList?.map((item) => {
                return (
                  <Col lg={8} md={12} xs={24}>
                    <div
                      onClick={() => navigate(constRoute?.selectFunction)}
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
      </Row>
    </div>
  );
});

export default SelectFunction;
