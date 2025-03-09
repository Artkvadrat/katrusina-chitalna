import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Modal } from "../../components";

import "./PreorderModal.css";
import { usePrivacyModal } from "../usePrivacyModal";

export const usePreorderModal = () => {
  const [preorderOpen, setPreorderOpen] = useState(false);

  const onClose = () => {
    setPreorderOpen(false);
  };

  const onOpen = () => {
    setPreorderOpen(true);
  };

  const { component: privacyModal, onOpen: onPrivacyModalOpen } =
    usePrivacyModal();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_szqcf2u", "template_a27cq0r", form.current, {
        publicKey: "tccT4-CbpBySBFtDq",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  const component = (
    <>
      <Modal isOpen={preorderOpen} onClose={onClose}>
        <div className="preorderWrapper">
          <form ref={form} onSubmit={sendEmail} className="preorderForm">
            <label>Ім'я</label>
            <input type="text" name="user_name" required />

            <label>Email</label>
            <input type="email" name="user_email" required />

            <label>Номер телефону (Viber/Telegram)</label>
            <input type="tel" name="user_name" required />

            <div>
              <input type="radio" id="policyCheck" name="policyCheck" />
              <label htmlFor="policyCheck" className="privacyLabel">
                Погоджуюсь з{" "}
                <span onClick={onPrivacyModalOpen}>
                  політикою конфіденційності
                </span>
              </label>
            </div>

            <input type="submit" value="Надіслати" />
          </form>
        </div>
      </Modal>

      {privacyModal}
    </>
  );

  return {
    isOpen: preorderOpen,
    onClose,
    onOpen,
    component,
  };
};
