import { observer } from "mobx-react";
import style from "./style.module.scss";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import LeftArrow from '@assets/icons/left-arrow.png'
import CardItemsFunc from "../common-components/card-item-func";
import { notification } from "@utils/notifications";
import GoBack from "@components/common-components/go-back";

const SelectFunction = observer(() => {
  const navigate = useNavigate();

  const btnCardsList = [
    {
      title: "Draft a GCF Concept Note or Proposal",
      status: "",
      navigate: () => navigate(constRoute?.whichToDo),
    },
    {
      title: "Climate Rationale Advisor",
      status: "Coming Soon", 
      disable:true,
    },
    {
      title: "Grade a GCF Concept Note or Proposal",
      status: "Most Popular",
    },
    {
      title: "Create Project Structure Plan",
      status: "Coming Soon",
      disable:true,
    },
    {
      title: "Funder Matchmaker ",
      status: "Coming Soon",
      disable:true,
    },
    {
      title: "Draft An Annex",
      status: "Coming Soon",
      disable:true,
    },
  ];

  return (
    <div>
    <div className={style.homePagePageContainer}>
      <Row>
        <div className={style.homePageContainerCol}>
          <div className={style.homePageContainer}>
            <h1>Select A Function Below</h1>
            <Row justify="center" className={style.boxesContiner} gutter={20}>
              {btnCardsList?.map((item) => {
                return (
                  <CardItemsFunc item={item} />
                );
              })}
            </Row>
          </div>
        </div>
     
      </Row>
     
    </div>
     <div className={style.btnDiv}>
     <div className={style.twoBtnDiv}>
       <div className={style.goBackBtnDiv}>
       
     <GoBack onClick={constRoute?.selectFunder} className={style.goBtn}  />
     </div>

       {/* <button className={style.goBtn}  onClick={() =>
           navigate(constRoute?.home)
         }
> <img src={LeftArrow} alt="left-arrow" /> Go Back</button> */}
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

export default SelectFunction;
