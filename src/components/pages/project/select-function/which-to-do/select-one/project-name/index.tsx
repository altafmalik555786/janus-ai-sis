import { observer } from "mobx-react";
import style from "./style.module.scss";
import { Col, Form, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import LeftArrow from "@assets/icons/left-arrow.png";
import { CommonInput } from "@components/common-components/input";
import { validateMessages } from "@utils/json-data";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";

const ProjectName = observer(() => {
  const navigate = useNavigate();
  const [form] = useForm();
  const [inputValue, setInputValue] = useState(true)
  const onFormSubmit = (value) => {
    navigate(constRoute?.importantProjectInfo,  { state: { projectName: value.projectName} });
  };

  const handleInputChange = (event) => {
    if(event.target.value.length > 0){
      setInputValue(false)
    }
    else{
      setInputValue(true)
    }
  };

  return (
    <div className={style.homePagePageContainer}>
      <Row>
        <div className={style.homePageContainerCol}>
          <div className={style.homePageContainer}>
            <h1>Give the Project a Name</h1>
            <Row justify="center" className={style.boxesContiner} gutter={20}>
              <Col span={24}>
                <Form
                  className={style.formData}
                  form={form}
                  autoComplete="false"
                  onFinish={onFormSubmit}
                  validateMessages={validateMessages}
                  layout="vertical"
                > 
                  <Form.Item
                    name={"projectName"}
                    label="Enter Project Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter project name",
                      },
                    ]}
                  > 
                    <CommonInput onChange={handleInputChange} type="text" className={style.emailInput} />
                  </Form.Item>
                  <div className={style.nextButtonDiv}>
                    <button disabled={inputValue} className={style.nextButton}>Next</button>
                  </div>
                </Form>
              </Col>
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

export default ProjectName;
