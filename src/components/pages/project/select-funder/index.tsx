import { observer } from "mobx-react";
import style from "./style.module.scss";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import LeftArrow from "@assets/icons/left-arrow.png";
import CardItemsFunc from "../common-components/card-item-func";
import { notification } from "@utils/notifications";
import GoBack from "@components/common-components/go-back";

const SelectFunder = observer(() => {
  const navigate = useNavigate();

  const btnCardsList = [
    {
      title: "Green Climate Fund (GCF)",
      status: "",
      navigate: () => navigate(constRoute?.selectFunction),
    },
    {
      title: "Global Environmental Facility (GEF)",
      status: "Coming Soon",
      disable: true,
    },
    {
      title: "United States Agency for International Development (USAID)",
      status: "Coming Soon",
      disable: true,
    },
    {
      title: "United States International Development Finance Corporation (DFC)",
      status: "Coming Soon",
      disable: true,
    }
  ];

  return (
    <div className={style.homePagePageContainer}>
      <Row>
        <div className={style.homePageContainerCol}>
          <div className={style.homePageContainer}>
            <h1>Select the funder you are targeting</h1>
            <Row justify="center" className={style.boxesContiner} gutter={20}>
              {btnCardsList?.map((item) => {
                return <CardItemsFunc item={item} />;
              })}
            </Row>
          </div>
        </div>
        <div className={style.btnDiv}>
          <div className={style.twoBtnDiv}>
            <GoBack onClick={constRoute?.home} className={style.goBtn} />
          </div>
        </div>
      </Row>
    </div>
  );
});

export default SelectFunder;
