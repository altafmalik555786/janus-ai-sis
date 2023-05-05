 import React from "react"; 
import styled from "styled-components";
import style from "./style.module.scss";
import { Modal, Collapse } from "antd";
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

const ModalWrapper = styled.div`
  padding: 10px 0px 10px 0px;
`;
