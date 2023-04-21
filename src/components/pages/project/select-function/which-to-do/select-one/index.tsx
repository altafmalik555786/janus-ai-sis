import { observer } from "mobx-react";
import style from "./style.module.scss";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import LeftArrow from '@assets/icons/left-arrow.png'
import CardItemsFunc from "@components/pages/project/common-components/card-item-func";

const SelectOne = observer(() => {
  const navigate = useNavigate();

  const btnCardsList = [
    {
      title: "New Concept Note Project",
      status: "",
      navigate: () => navigate(constRoute?.projectName),
    },
    {
      title: "Open an existing Concept Note Project",
      status: "",
    },
   
  ];

  return (
    <div className={style.homePagePageContainer}>
      <Row>
        <div className={style.homePageContainerCol}>
          <div className={style.homePageContainer}>
            <h1>Select From One of The Options Below</h1>
            <Row justify="center" className={style.boxesContiner} gutter={20}>
              {btnCardsList?.map((item) => {
                return (
                  <CardItemsFunc item={item} />
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

export default SelectOne;
