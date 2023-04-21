import { observer } from "mobx-react";
import style from "./style.module.scss";
import React, { memo } from "react";
import { Col, Divider, Layout, Row, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import CloseIcon from "@assets/icons/closeIcon.png";
import { Content } from "antd/es/layout/layout";

const ContextAndBaselineForm = observer(() => {
  return (
    <div className={style.mainContainer}>
      <div className={style.contextBaselineDiv}>
        <div>
          <p className={style.pTageOne}>
            Project Name: <strong>Brazil Climate Security</strong>
          </p>
          <p className={style.pTageTwo}>
            Percent Complete: <strong>0%</strong>
          </p>
        </div>
        <div>
          <p className={style.pTageThree}>
            Concept Note Section:<strong> B.1. Context And Baseline</strong>
          </p>
        </div>
      </div>
      <div>
        <Space className={style.spaceTag} direction="vertical" size={[0, 48]}>
          <Layout className={style.layoutDiv}>
            <Sider className={style.siderStyle}>
              <div className={style.sideInnerDiv}>
                <div className={style.importantDiv}>
                  <p className={style.pTagFour}>Important</p>
                  <button className={style.btnClass}>
                    <img
                      src={CloseIcon}
                      className={style.closeIconImg}
                      alt="fd"
                    />
                  </button>
                </div>
                <div className={style.pTageGroup}>
                  <p className={style.pTagFive}>
                    Provide information on which climate risks/impacts the
                    intervention is designed to address.
                  </p>
                  <p className={style.pTagSix}>
                    Describe the main root causes and barriers (social, gender,
                    fiscal, regulatory, technological, financial, ecological,
                    institutional, etc.) that need to be addressed. 
                  </p>
                  <p className={style.pTagSeven}>
                    Be sure to include the number of beneficiaries the project
                    is expected to help.
                  </p>
                </div>
                <Divider />
              </div>
            </Sider>
         

        <div className={style.contentStyle}>
          <div className={style.contentMainDiv}>
            <div className={style.contentDiv}>
              <div className={style.contentDivTwo}>
                <h2>Please Fill In the Blanks Below:</h2>
  
              </div>
            </div>
          </div>

        </div>
        </Layout>
        </Space>
      </div>
    </div>
  );
});

export default memo(ContextAndBaselineForm);
