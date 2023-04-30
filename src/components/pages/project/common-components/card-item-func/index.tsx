import React from "react";
import { Col } from "antd";
import { observer } from "mobx-react";
import style from './style.module.scss'

export interface itemPropsTypes {
    item: any;
}
 
const CardItemsFunc = observer(({ item }: itemPropsTypes ) => {
  return (
    <Col lg={8} md={12} xs={24}> 
      <div onClick={item.navigate} className={item.disable ? style.disableCards : style.cardItem}>
        {(item?.status === "Most Popular" && (
          <div className={style.statusBadge}>
            {" "}
            <p> {item?.status} </p>{" "}
          </div>
        )) || <p> {item?.status || " "}</p>}
        <h4 className={!item?.status?.length && style.withOutStatus}>
          {item?.title}
        </h4>
      </div>
    </Col>
  );
});

export default CardItemsFunc;
