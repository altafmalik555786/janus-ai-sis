import React from "react";
import styled from "styled-components";
import { Modal, Button } from "antd";
import closeIcon from "../../../assets/icons/crossIcon.svg";

interface Props {
  setIsOpen?: (value) => void;
  isOpen?: boolean;
  onDeleteRecord?: any;
  loading?: boolean;
  closeModal?: (value) => void;
}
const ProjectDeleteModelData: React.FC<Props> = ({
  onDeleteRecord,
  isOpen,
  closeModal,
  loading,
}) => {
  return (
    <Wrapper>
      <Modal
        onCancel={closeModal}
        open={isOpen}
        className={"customKeywordModal"}
        width={591}
        closable={false}
        footer={null}
      >
        <ModalWrapper>
          <FlexWrapper>
            <ImageWrapper>
              <img src={closeIcon} onClick={closeModal}/>
            </ImageWrapper>
            <div>
              <Message>Are you sure you want to delete this project?</Message>
              <WarningMessage>
                This action cannot be undone, and you run the risk of losing all
                your work that you have completed.
              </WarningMessage>
            </div>
          </FlexWrapper>
          <FlexWrapperSpaceBetween>
            <BackButton onClick={closeModal}>No, cancel</BackButton>
            <DeleteButton
              loading={loading}
              disabled={loading}
              onClick={() => {
                onDeleteRecord();
              }}
            >
              Yes, delete
            </DeleteButton>
          </FlexWrapperSpaceBetween>
        </ModalWrapper>
      </Modal>
    </Wrapper>
  );
};
export default ProjectDeleteModelData;
const ImageWrapper = styled.div`
  width: 56px;
  height: 56px;
  background: #fdb9b9;
  border-radius: 8px;
  cursor: pointer;
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
