import { observer } from "mobx-react";
import style from "./style.module.scss";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import Footer from "./footer";

const Home = observer(() => {
  const navigate = useNavigate();

  return (
    <div className={style.homePagePageContainer}>
      <Row>
        <Col md={6} xs={2}></Col>
        <Col md={12} xs={20} className={style.homePageContainerCol}>
          <div className={style.homePageContainer}>
            <h1>Welcome to Climate Finance Co-pilot</h1>
            <div className={style.paraContainer}>
              <p>Your expert advisor for all things climate finance.</p>
              <p>Start by selecting one of the options below.</p>
            </div>
            <Row className={style.boxesContiner} gutter={20}>
              <Col md={12} xs={24} sm={24}>
                <div
                  onClick={() => navigate(constRoute?.selectFunction)}
                  className={style.newProject}
                >
                  <h4> New Project </h4>
                </div>
              </Col>
              <Col md={12} xs={24} sm={24}>
                <div className={style.existingProject}>
                  <h4>Open Existing Project</h4>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={6} xs={2}></Col>
      </Row>
      <Footer />
    </div>
  );
});

export default Home;
