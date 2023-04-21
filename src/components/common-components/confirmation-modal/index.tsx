import { useTheme } from "@utils/hooks/useTheme";
import classNames from "classnames";
import { Modal } from "antd";
import React from "react";
import CustomButton from "../custom-button";
import style from "./style.module.scss";
interface ModalPropsTypes {
  setIsOpen?: (value) => void;
  title?: string;
  confirmBtnTitle?: string;
  cancelBtnTitle?: string;
  description?: string;
  warningText?: string;
  isOpen?: boolean;
  onConfirm?: () => void;
  loadingConfirmBtn?: boolean;
  onCancel?: (value) => void;
}
export const ConfirmationModal: React.FC<ModalPropsTypes> = ({
  onConfirm,
  isOpen,
  onCancel,
  warningText = "This action cannot be undo",
  description = "",
  confirmBtnTitle = "Confirm",
  cancelBtnTitle = "Cancel",
  loadingConfirmBtn = false,
}) => {
  const theme = useTheme();
  return (
    <Modal
      onCancel={onCancel}
      closable={false}
      open={isOpen}
      className={classNames(theme, style.confirmationModal)}
      footer={
        <div className={style.footerBtnWrapper}>
          <CustomButton
            onClick={onCancel}
            variant={"outlined"}
            title={cancelBtnTitle}
          />
          <CustomButton
            onClick={onConfirm}
            variant={"filled"}
            title={confirmBtnTitle}
            loading={loadingConfirmBtn}
          />
        </div>
      }
    >
      <div className={style.modalBodyContent}>
        <p> {description} </p>
        <p className={style.warningText}> {warningText} </p>
      </div>
    </Modal>
  );
};
