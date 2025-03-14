import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Modal } from "../../components";

import "./PreorderModal.css";
import { usePrivacyModal, useSuccessEmailModal, useErrorEmailModal } from "..";

export const usePreorderModal = () => {
  const [preorderOpen, setPreorderOpen] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const onClose = () => {
    setPreorderOpen(false);
  };

  const onOpen = () => {
    setPreorderOpen(true);
  };

  const { component: privacyModal, onOpen: onPrivacyModalOpen } =
    usePrivacyModal();
  const { component: successEmailOpenModal, onOpen: onSuccessEmailOpen } =
    useSuccessEmailModal();
  const { component: errorEmailOpenModal, onOpen: onErrorEmailOpen } =
    useErrorEmailModal();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsFormDisabled(true);

    emailjs
      .sendForm("service_szqcf2u", "template_a27cq0r", form.current, {
        publicKey: "tccT4-CbpBySBFtDq",
      })
      .then(
        () => {
          setIsFormDisabled(false);
          onSuccessEmailOpen();
          onClose();
        },
        () => {
          setIsFormDisabled(false);
          onErrorEmailOpen();
          onClose();
        },
      );
  };

  const component = (
    <>
      <Modal isOpen={preorderOpen} onClose={onClose}>
        <div className="preorderWrapper">
          <p>
            Залиште свої контакти, і ми напишемо вам у Telegram/Viber протягом
            30–60 хвилин, щоб обговорити всі деталі 🧡
          </p>
          <form ref={form} onSubmit={sendEmail} className="preorderForm">
            <label>Ім'я</label>
            <input
              type="text"
              name="user_name"
              placeholder="Введіть ваше ім'я"
              required
              disabled={isFormDisabled}
            />

            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Введіть вашу пошту"
              required
              disabled={isFormDisabled}
            />

            <label>Номер телефону (Viber/Telegram)</label>
            <input
              type="telephone"
              name="user_phone"
              placeholder="Введіть ваш номер телефону"
              required
              disabled={isFormDisabled}
            />

            <label>Коментар до замовлення</label>
            <textarea
              name="user_comment"
              placeholder="Коментар"
              disabled={isFormDisabled}
              rows="2"
            />

            <div>
              <input
                type="radio"
                id="policyCheck"
                name="policyCheck"
                disabled={isFormDisabled}
              />
              <label htmlFor="policyCheck" className="privacyLabel">
                Я погоджуюсь з{" "}
                <span onClick={onPrivacyModalOpen}>
                  політикою конфіденційності
                </span>
              </label>
            </div>

            <input type="submit" value="Надіслати" disabled={isFormDisabled} />
          </form>
        </div>
      </Modal>

      {privacyModal}
      {successEmailOpenModal}
      {errorEmailOpenModal}
    </>
  );

  return {
    isOpen: preorderOpen,
    onClose,
    onOpen,
    component,
  };
};
