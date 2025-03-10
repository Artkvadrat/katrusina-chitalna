import { useState } from "react";

import { Modal } from "../../components";
import errorIcon from "../../assets/icons/error.svg";

import "./ErrorEmailModal.css";

export const useErrorEmailModal = () => {
  const [errorEmailOpen, setErrorEmailOpen] = useState(false);

  const onClose = () => {
    setErrorEmailOpen(false);
  };

  const onOpen = () => {
    setErrorEmailOpen(true);
  };

  const component = (
    <Modal isOpen={errorEmailOpen} onClose={onClose}>
      <div className="errorEmailWrapper">
        <img src={errorIcon} alt="Error email" />
        <p>Ой...</p>
        <p>
          Шось пішло не так і ваш запит на передзамовлення не надіслано.
          Спробуйте будь ласка пізніше або напишіть нам{" "}
          <a
            href="https://t.me/kateryna_hurtovaaa"
            target="_blank"
            rel="noreferrer"
          >
            сюди
          </a>
          .
        </p>
      </div>
    </Modal>
  );

  return {
    isOpen: errorEmailOpen,
    onClose,
    onOpen,
    component,
  };
};
