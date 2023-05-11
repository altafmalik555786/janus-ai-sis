import { observer } from "mobx-react";
import style from "./style.module.scss";
import { Col, Form, Input, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import LeftArrow from "@assets/icons/left-arrow.png";
import { CommonInput } from "@components/common-components/input";
import { validateMessages } from "@utils/json-data";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { notification } from "@utils/notifications"; 
import GoBack from "@components/common-components/go-back";

const ProjectName = observer(() => {
  const navigate = useNavigate();
  const [form] = useForm();
  const [inputValue, setInputValue] = useState(true)
  const [inputValueLength, setInputValueLength] = useState(false);
  const onFormSubmit = (value) => {
    localStorage.setItem('projectName', value.projectName)
    navigate(constRoute?.importantProjectInfo,  { state: { projectName: value.projectName} });
  };

  const handleInputChange = (event) => {
    if(event.target.value.length >= 75){
      setInputValueLength(true)
    }
    else{
      setInputValueLength(false)
    }
    if(event.target.value.length > 0 || event.target.value.length > 88){
      setInputValue(false);
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
                    <Input maxLength={75} onChange={(e) => handleInputChange(e)} type="text" className={style.emailInput}/>
                  </Form.Item>
                  {<p style={{display:'flex', justifyContent:inputValueLength ? 'space-between' : "end", margin:0}}>{inputValueLength && <span style={{ color:'red', marginTop:-12}}>Characters values exceeded</span> }<span style={{ color:'red', marginTop:-12}}>Maximum 75 characters</span></p>}
                  <div className={style.nextButtonDiv}>
                    <button disabled={inputValue || inputValueLength} className={style.nextButton}>Next</button>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
        <div className={style.btnDiv}>
          <div className={style.twoBtnDiv}>
          <GoBack onClick={constRoute?.selectOne}             className={style.goBtn} />
            {/* <button 
             onClick={() =>
              navigate(constRoute?.selectOne)
            }
            className={style.goBtn}>
              {" "}
              <img src={LeftArrow} alt="left-arrow" /> Go Back
            </button> */}
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
      </Row>
    </div>
  );
});

export default ProjectName;
