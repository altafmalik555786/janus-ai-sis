import React from "react";
import styled from "styled-components";
import style from "./style.module.scss";
import { Modal, Button, Collapse } from "antd";
import closeIcon from "../../../assets/icons/crossIcon.svg";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
interface Props {
  setIsOpen?: (value) => void;
  isOpen?: boolean;
  closeModal?: (value) => void;
}

const text = ` 
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
commodi maiores enim dolorem exercitationem est animi corporis ducimus, 
reiciendis inventore vitae praesentium minus sequi ipsum aliquam esse in iste nemo!

`;

const FaqModel: React.FC<Props> = ({ isOpen, closeModal }) => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <Wrapper>
      <Modal
        onCancel={closeModal}
        open={isOpen}
        // className={"customKeywordModal"}
        className={style.mainContainer}
        width={591}
        footer={null}
      >
        <ModalWrapper className={style.modalContainer}>
          <Collapse
            expandIcon={({ isActive }) =>
              isActive ? (
                <div className={style.plusIcon}>
                  <MinusOutlined />
                </div>
              ) : (
                <div className={style.plusIcon}>
                  <PlusOutlined />
                </div>
              )
            }
            defaultActiveKey={["1"]}
            onChange={onChange}
          >
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 4" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </ModalWrapper>
      </Modal>
    </Wrapper>
  );
};
export default FaqModel;
const ImageWrapper = styled.div`
  width: 56px;
  height: 56px;
  background: #fdb9b9;
  border-radius: 8px;
`;
const DeleteButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 20px;
  width: 251px;
  border: 1px solid #de3b3b;
  height: 44px;
  background: #de3b3b;
  color: #ffff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 17px;
  border-radius: 5px;
  &:hover {
    background: #de3b3b !important;
    color: #ffff !important;
    border: 1px solid #de3b3b !important;
  }
`;
const BackButton = styled(Button)`
  background: #ffffff;
  border: 1px solid #de3b3b;
  border-radius: 5px;
  padding: 14px 20px;
  display: flex;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 17px;
  width: 251px;
  height: 44px;
  justify-content: center;
  align-items: center;
  color: #de3b3b;
  &:hover {
    border: 1px solid #de3b3b !important;
    color: #de3b3b !important;
    background: #ffffff !important;
  }
`;
const Wrapper = styled.div`
  .customKeywordModal {
    position: relative;

    .rc-dialog-content {
      .rc-dialog-close {
        color: #fff;
        font-size: 40px;
        right: -50px;
        top: -14px;
      }
    }
  }
`;
const Message = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;
const WarningMessage = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #2e2e2e;
  margin-top: 8px;
`;
const ModalWrapper = styled.div`
  padding: 10px 0px 10px 0px;
`;
const FlexWrapper = styled.div`
  display: flex;
  gap: 24px;
`;
const FlexWrapperSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  alin-items: center;
  gap: 24px;
  flex-wrap: wrap;
`;
