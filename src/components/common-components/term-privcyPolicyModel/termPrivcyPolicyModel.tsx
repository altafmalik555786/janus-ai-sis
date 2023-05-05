import React from "react";
import styled from "styled-components";
import style from "./style.module.scss";
import { Modal, Button, Collapse } from "antd";
const { Panel } = Collapse;
interface Props {
  setIsOpen?: (value) => void;
  isOpen?: boolean;
  closeModal?: (value) => void;
  isTerm?: boolean;
}

const text = ` 
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
commodi maiores enim dolorem exercitationem est animi corporis ducimus, 
reiciendis inventore vitae praesentium minus sequi ipsum aliquam esse in iste nemo!
`;

const TermPrivcyPolicyModel: React.FC<Props> = ({
  isOpen,
  closeModal,
  isTerm,
}) => {
  const onChange = (key: string | string[]) => {};
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
          {isTerm ? (
            <div className={style.termStyle}>
              <h1>Terms of use</h1>
              <p>Thank you for using Climate Finance Co-pilot</p>
              <p>
                These Terms of Use apply when you use the services of Janus
                Advisory Service Inc. or our affiliates, including our
                application programming interface, software, tools, developer
                services, data, documentation, and websites (“Services”). The
                Terms include our Service Terms, Sharing & Publication Policy,
                Usage Policies, and other documentation, guidelines, or policies
                we may provide in writing. By using our Services, you agree to
                these Terms. Our Privacy Policy explains how we collect and use
                personal information.
              </p>
              <h2>1. Registration and Access</h2>
              <p>
                You must be at least 13 years old to use the Services. If you
                are under 18 you must have your parent or legal guardian’s
                permission to use the Services. If you use the Services on
                behalf of another person or entity, you must have the authority
                to accept the Terms on their behalf. You must provide accurate
                and complete information to register for an account. You may not
                make your access credentials or account available to others
                outside your organization, and you are responsible for all
                activities that occur using your credentials.
              </p>
              <p>
               e Sites.
              </p>
              <h2>A. Your Accounts</h2>
              <p>
               ges.
              </p>

              <p>
                vement.
              </p>
              <p>
                administrator.
              </p>
              <h2>B. Success Community</h2>
              <p>
              pects, and
               
              </p>
              <p>
                 account.
              </p>
              <p>
              OWN RISK.
              </p>
            </div>
          ) : (
            <div>
              <h1>Privcy Policy </h1>
              <p>
               nt.
              </p>
              <h2>Learn about our commitment to privacy</h2>
              <strong>
                OCESSOR
              </strong>
              <ul>
                <li></li>
              </ul>
            </div>
          )}
        </ModalWrapper>
      </Modal>
    </Wrapper>
  );
};
export default TermPrivcyPolicyModel;

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
