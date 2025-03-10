import { useState } from "react";

import { Modal } from "../../components";
import successIcon from "../../assets/icons/success.svg";

import "./SuccessEmailModal.css";

export const useSuccessEmailModal = () => {
  const [successEmailOpen, setSuccessEmailOpen] = useState(false);

  const onClose = () => {
    setSuccessEmailOpen(false);
  };

  const onOpen = () => {
    setSuccessEmailOpen(true);
  };

  const component = (
    <Modal isOpen={successEmailOpen} onClose={onClose}>
      <div className="successEmailWrapper">
        <img src={successIcon} alt="success email" />
        <p>
          Запит на передзамовлення успішно надіслано. Ми напишемо вам у
          Telegram/Viber протягом 30–60 хвилин, щоб обговорити всі деталі 🧡
        </p>
      </div>
    </Modal>
  );

  return {
    isOpen: successEmailOpen,
    onClose,
    onOpen,
    component,
  };
};
